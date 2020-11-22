import React from "react";
import MyPostsContainer from "./myPostContainer";
import { Segment, Image, Form, Grid, Button } from "semantic-ui-react";

class ProfilePage extends React.Component {
  state = {
    title: "",
    article: "",
    image: "",
    createForm: false,
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const currentStateObj = {
      article_text: this.state.article,
      title: this.state.title,
      image: this.state.image,
      user_id: this.props.currentUser.id,
      reviews: [],
    };
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(currentStateObj),
    })
      .then((r) => r.json())
      .then((newlyCreatedPost) => {
        console.log(newlyCreatedPost, "newly created post");
        this.props.addPostToCurrentUser(newlyCreatedPost);
        this.setState({
          title: "",
          article: "",
          image: "",
        });
      });
  };
  createPostForm = () => {
    return (
      <Segment>
        <Form onSubmit={this.submitHandler}>
          <h1>{"Create a Post!"}</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Image URL"
              placeholder="url"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Title"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.TextArea
              fluid
              label="Article Body"
              placeholder="Article"
              name="article"
              value={this.state.article}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    );
  };
  handleForm = () => {
    this.setState({
      createForm: !this.state.createForm,
    });
    return this.createPostForm();
  };
  render() {
    return (
      <div style={{ backgroundColor: "#ddc9b4" }}>
        {/* <h2>Welcome Back {this.props.userObj.name}!</h2> */}

        {this.state.createForm ? this.createPostForm() : null}

        <Segment style={{ backgroundColor: "#ddc9b4" }}>
          <Segment>
            <Grid>
              <Grid.Column width={4}>
                <Image
                  floated="left"
                  src={this.props.currentUser.profile_img}
                  size="medium"
                  rounded
                />
              </Grid.Column>
              <Grid.Column width={9}>
                <h3>Bio</h3>
                <p>{this.props.currentUser.bio}</p>
                <h5>Favorite Coffee Blend/Origin</h5>
                <span>{this.props.currentUser.current_coffee_beans}</span>
                <h5>Coffee Medium</h5>
                <span>{this.props.currentUser.coffee_medium}</span>
              </Grid.Column>
              <Grid.Column>
                <Button class="ui basic button" onClick={this.handleForm}>
                  <i class="coffee"></i>
                  Create Post
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <MyPostsContainer
            deletePost={this.props.deletePost}
            userPosts={this.props.userPosts}
            currentUser={this.props.currentUser}
          />
        </Segment>
      </div>
    );
  }
}

export default ProfilePage;
