import React from "react";
import PostContainer from "./PostContainer";
// import { Card } from "semantic-ui-react";

class UserFeedPage extends React.Component {
  render() {
    return (
      <>
        <div className="feed">
          <h1 style={{ textAlign: "center" }}>Feed</h1>
          <PostContainer />
        </div>
      </>
    );
  }
}

export default UserFeedPage;
