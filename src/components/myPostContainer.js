import React from "react";
import Posts from "./Posts";
import { Card } from "semantic-ui-react";
class MyPostsContainer extends React.Component {
  turnToPost = () => {
    return this.props.currentUser.posts.map((post) => (
      <Posts key={post.id} post={post} deletePost={this.props.deletePost} />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4} style={{ backgroundColor: "#7A6C5D" }}>
        {this.turnToPost()}
      </Card.Group>
    );
  }
}

export default MyPostsContainer;
