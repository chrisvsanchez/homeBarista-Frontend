import React from "react";
import { Grid, Card, Image, Segment } from "semantic-ui-react";
class FeedPost extends React.Component {
  posty = () => {
    return this.props.feed.posts.map((post) => (
      <Segment>
        <div>
          <Image
            floated="left"
            src={this.props.user.profile_img}
            size="mini"
            circular
            verticalAlign="middle"
          />
          <span>
            <strong>Created by: </strong>
            {this.props.user.name}
          </span>
        </div>
        <Grid key={post.id} post={post} image={post.image} title={post.title}>
          <Grid.Column width={4}>
            <Image src={post.image} />
          </Grid.Column>
          <Grid.Column width={9}>
            <h4>
              <strong>{post.title}</strong>
            </h4>
            <p>{post.article_text}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    ));
    // posty = () => {
    //   return this.props.feed.posts.map((post) => (
    //     <Card key={post.id} post={post} image={post.image} title={post.title}>
    //       <h4>{post.title}</h4>
    //       <Image src={post.image}></Image>
    //       <p>{post.article_text}</p>
    //     </Card>
    //   ));
  };
  // unable to access post information
  render() {
    console.log(this.props.user);
    // debugger;
    // console.log();
    // console.log(this.handlePosts);
    return (
      // <Card>
      //   <div>
      //     <Image
      //       floated="left"
      //       src={this.props.user.profile_img}
      //       size="mini"
      //       circular
      //       verticalAlign="middle"
      //     />
      //     <span>{this.props.user.name}</span>
      //     {this.props.posts ? this.posty() : null}
      //   </div>
      // </Card>
      <Card>{this.posty()}</Card>
    );
  }
}
export default FeedPost;
