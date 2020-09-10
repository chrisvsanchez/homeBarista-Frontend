import React from "react";
// import FeedPost from "./FeedPost";
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
        this.setState({
          feed: feedObjs,
        });
      });
  }
  turnToPostFeed = () => {
    return this.state.feed.map((feed) => (
      <FeedPost key={feed.id} user={feed.user} posts={feed.posts} feed={feed} />
    ));
  };

  render() {
    return <Card.Group itemsPerRow={1}>{this.turnToPostFeed()}</Card.Group>;
  }
}
export default PostContainer;
