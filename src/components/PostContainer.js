import React from "react";
import { Card } from "semantic-ui-react";
import FeedPost from "./FeedPost";
class PostContainer extends React.Component {
  state = {
    feed: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/feeds")
      .then((r) => r.json())
      .then((feedObjs) => {
        console.log(feedObjs);
        this.setState({
          feed: feedObjs,
        });
      });
  }
  turnToPostFeed = () => {
    return this.state.feed.map((feed) => (
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
        <Card.Group itemsPerRow={1}>{this.turnToPostFeed()}</Card.Group>
      </>
    );
  }
}
export default PostContainer;
