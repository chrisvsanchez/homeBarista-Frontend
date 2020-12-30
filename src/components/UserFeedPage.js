import React from "react";
import PostContainer from "./PostContainer";
// import { Card } from "semantic-ui-react";

class UserFeedPage extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Feed</h1>
        <PostContainer />
      </>
    );
  }
}

export default UserFeedPage;
