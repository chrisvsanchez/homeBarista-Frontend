import React from "react";
import { Card, Image } from "semantic-ui-react";
class FeedPost extends React.Component {
  posty = () => {
    return this.props.feed.posts.map((post) => (
      <Card key={post.id} post={post} image={post.image} title={post.title}>
        <h4>{post.title}</h4>
        <Image src={post.image}></Image>
        <p>{post.article_text}</p>
      </Card>
    ));
  };
  // unable to access post information
  render() {
    console.log(this.props.user);
    // debugger;
    // console.log();
    // console.log(this.handlePosts);
    return (
      <Card>
        <div>
          <Image
            floated="left"
            src={this.props.user.profile_img}
            size="mini"
            circular
            verticalAlign="middle"
          />
          <span>{this.props.user.name}</span>
          {this.props.posts ? this.posty() : null}
        </div>
      </Card>
    );
  }
}
export default FeedPost;
