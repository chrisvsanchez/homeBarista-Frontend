import React from "react";
import ProfilePage from "./ProfilePage";
import { Switch, Route } from "react-router-dom";
import UserFeedPage from "./UserFeedPage";
// import { Feed } from "semantic-ui-react";
class MainContainer extends React.Component {
  state = {
    currentUsersPosts: [],
    currentUser: 3,
  };
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.state.currentUser}`)
      .then((r) => r.json())
      .then((UserObj) => {
        // console.log(UserObj)
        this.setState({
          currentUser: UserObj,
          currentUsersPosts: UserObj.posts,
        });
      });
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
      <div style={{ border: "3px solid blue" }}>
        <h1>Main Container</h1>
        <Switch>
          <Route path="/profilePage">
            <ProfilePage
              userPosts={this.state.currentUsersPosts}
              userObj={this.state.currentUser}
              addPostToCurrentUser={this.addPostToCurrentUser}
              deletePost={this.deletePost}
            />
          </Route>
          <Route path="/Feed">
            <UserFeedPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
