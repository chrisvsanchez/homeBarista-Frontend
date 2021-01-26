import React from "react";
import { Card } from "semantic-ui-react";
import FeedPost from "./FeedPost";
class PostContainer extends React.Component {
  state = {
    feed: [],
  };

  turnToPostFeed = () => {
    return this.props.feed.map((feed) => (
      <FeedPost
        key={feed.id}
        user={feed.user}
        posts={this.state.feed.posts}
        feed={feed}
      />
    ));
  };

  render() {
    return (
      <>
        <Card.Group className="post-feed-container" itemsPerRow={1}>
          {this.turnToPostFeed()}
        </Card.Group>
      </>
    );
  }
}
export default PostContainer;
