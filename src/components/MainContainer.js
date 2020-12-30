import React from "react";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import { Switch, Route, withRouter } from "react-router-dom";
import UserFeedPage from "./UserFeedPage";
import NavBar from "./NavBar";
import ProfileContainer from "./SearchBaristas/ProfileContainer";
import BaristaShowPage from "./SearchBaristas/BaristaShowPage";

class MainContainer extends React.Component {
  state = {
    currentUsersPosts: [],
    currentUser: null,
  };
  updateProfilePic = (newPhoto) => {
    console.log("MainContainer Photo joint", newPhoto);
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
          this.handleLogin(loggedInUser);
          this.setState({
            currentUser: loggedInUser,
            currentUsersPosts: loggedInUser.posts,
          });
        });
    }
  }

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
                    updateProfilePic={this.updateProfilePic}
                  />
                </Route>
                <Route path="/Feed">
                  <UserFeedPage />
                </Route>
                <Route
                  path="/baristashowpage/:id"
                  render={(props) => <BaristaShowPage {...props} />}
                />
                <Route path="/Find">
                  <ProfileContainer />
                </Route>
              </>
            ) : null}
            <Route path="/home">
              <Home
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
              />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(MainContainer);
