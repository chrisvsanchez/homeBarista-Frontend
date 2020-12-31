import React from "react";
import {
  Grid,
  // Card,
  Image,
  Segment,
  Button,
  Form,
  TextArea,
} from "semantic-ui-react";

class FeedPost extends React.Component {
  state = {
    viewComments: false,
    writeComment: false,
    currentUser: null,
    currentPost: null,
    newComment: "",
    currentPostId: 0,
  };

  toggleComments = () => {
    this.setState({
      viewComments: !this.state.viewComments,
    });
  };
  toggleWriteComment = () => {
    this.setState({
      writeComment: !this.state.writeComment,
    });
  };
  setCommentText = (postID) => {
    this.setState({
      currentPostId: postID,
    });
  };
  createCommentForm = (postID) => {
    return (
      <>
        <Form onSubmit={(this.onSubmitComment(e), this.setCommentText(postID))}>
          <TextArea
            placeholder="Write comment here..."
            onChange={this.handleCommentText}
          ></TextArea>
          <Button size="small">Submit</Button>
        </Form>
      </>
    );
  };
  onSubmitComment = (e) => {
    e.preventDefault();

    let reviewObj = {
      user_id: this.state.user_id,
      post_id: this.state.postID,
    };
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    })
      .then((r) => r.json())
      .then((newlyCreatedPost) => {
        this.setState({});
      });
  };
  showComments = (reviews) => {
    return reviews.map((review) => (
      <Segment key={review.id}>
        <Grid.Row key={review.id}>
          <div>
            <h5> {review.text}</h5>
          </div>
          <p>created on {review.created_at}</p>
        </Grid.Row>
      </Segment>
    ));
  };
  posty = () => {
    return this.props.feed.posts.map((post) => (
      <Segment key={post.id} post={post} image={post.image} title={post.title}>
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
        <Grid>
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
        <div>
          <Button size="tiny" floated="right" onClick={this.toggleComments}>
            Show Comments
          </Button>

          <Button size="tiny" floated="right" onClick={this.toggleWriteComment}>
            Write Comment
          </Button>
        </div>

        {this.state.viewComments ? (
          <div>
            <br></br>
            <br></br>
            {this.showComments(post.reviews)}
          </div>
        ) : null}
        {this.state.writeComment ? this.createCommentForm(post.id) : null}
      </Segment>
    ));
  };

  render() {
    return <>{this.posty()}</>;
  }
}
export default FeedPost;
