import React from "react";
import MyPostsContainer from "./myPostContainer";
import { Segment, Image, Form } from "semantic-ui-react";

class ProfilePage extends React.Component {
  state = {
    title: "",
    article: "",
    image: "",
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
      user_id: this.props.userObj.id,
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
        console.log(newlyCreatedPost);
        this.props.addPostToCurrentUser(newlyCreatedPost);
      });
  };
  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Profile Page</h2>
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
        <Segment>
          <div>
            <Image
              floated="left"
              src={this.props.userObj.profile_img}
              size="small"
              circular
            />
            <h3>Bio</h3>
            <p>{this.props.userObj.bio}</p>
            <h5>Favorite Coffee Blend/Origin</h5>
            <p>{this.props.userObj.current_coffee_beans}</p>
            <h5>Coffee Medium</h5>
            <p>{this.props.userObj.current_coffee_beans}</p>
          </div>
          <MyPostsContainer
            deletePost={this.props.deletePost}
            userPosts={this.props.userPosts}
          />
        </Segment>
      </div>
    );
  }
}

export default ProfilePage;
