import React from "react";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import { Switch, Route, withRouter } from "react-router-dom";
import UserFeedPage from "./UserFeedPage";
import NavBar from "./NavBar";
class MainContainer extends React.Component {
  state = {
    currentUsersPosts: [],
    currentUser: null,
  };
  handleLogin = (currentUser) => {
    this.setState({ currentUser }, () => {
      this.props.history.push("/profilePage");
    });
  };
  handleLogout = () => {
    // localStorage.clear();
    localStorage.removeItem("token");
    this.setState(
      {
        currentUser: null,
      },
      () => this.props.history.push("/")
    );
  };
  componentDidMount() {
    if (localStorage.token) {
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((r) => r.json())
        .then((loggedInUser) => {
          console.log(loggedInUser, "autologin");
          this.handleLogin(loggedInUser);
          this.setState({
            currentUser: loggedInUser,
            currentUsersPosts: loggedInUser.posts,
          });
        });
    }
  }
  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${this.state.currentUser}`)
  //     .then((r) => r.json())
  //     .then((UserObj) => {
  //       // console.log(UserObj)
  //       this.setState({
  //         currentUser: UserObj,
  //         currentUsersPosts: UserObj.posts,
  //       });
  //     });
  // }
  addPostToCurrentUser = (newPostObj) => {
    const newPost = [newPostObj, ...this.state.currentUsersPosts];
    this.setState({
      currentUsersPosts: newPost,
    });
  };
  deletePost = (childId) => {
    console.log(childId);
    fetch(`http://localhost:3000/posts/${childId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedPost) => {
        // debugger;
        let copyOfPost = this.state.currentUsersPosts.filter((post) => {
          return post.id !== childId;
        });
        this.setState({
          currentUsersPosts: copyOfPost,
        });
      });
  };

  render() {
    return (
      <>
        <NavBar
          currentUser={this.state.currentUser}
          logout={this.handleLogout}
        />
        <div style={{ backgroundColor: "#ddc9b4" }}>
          <Switch>
            {this.state.currentUser ? (
              <>
                <Route path="/profilePage">
                  <ProfilePage
                    userPosts={this.state.currentUsersPosts}
                    currentUser={this.state.currentUser}
                    addPostToCurrentUser={this.addPostToCurrentUser}
                    deletePost={this.deletePost}
                  />
                </Route>
                <Route path="/Feed">
                  <UserFeedPage />
                </Route>
              </>
            ) : null}
            <Route path="/">
              <Home handleLogin={this.handleLogin} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(MainContainer);
