import React from "react";
import MyPostsContainer from "./myPostContainer";
import { Segment, Image, Form, Grid } from "semantic-ui-react";
import ProfileSideBar from "./ProfileSideBar";
// import NewItemForm from "./NewItemForm";

class ProfilePage extends React.Component {
  state = {
    title: "",
    article: "",
    image: {},
    profilePicture: {},
    createForm: false,
    uploadPhoto: false,
  };
  onChange = (e) => {
    e.persist();

    this.setState(() => {
      return {
        [e.target.name]: e.target.files[0],
      };
    });
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  uploadNewProfilePic = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", this.state.profilePicture);
    fetch(`https://home-barista-api.herokuapp.com/items`, {
      method: "POST",
      body: form,
    })
      .then((r) => r.json())
      .then((imageObj) => {
        console.log(imageObj, imageObj);
        this.setState(
          {
            profilePicture: imageObj.image,
          },
          () => this.props.updateProfilePic(imageObj.image)
        );
      });
  };
  toggleUploadPhoto = () => {
    this.setState({
      uploadPhoto: !this.state.uploadPhoto,
    });
    return this.createUploadProfilePicForm();
  };
  createUploadProfilePicForm = () => {
    return (
      <Segment>
        <Form className="form" onSubmit={this.uploadNewProfilePic}>
          <Form.Input
            label="Upload new Profile picture"
            name="profilePicture"
            onChange={this.onChange}
            type="file"
          />
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </Segment>
    );
  };
  submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", this.state.image);
    fetch(`https://home-barista-api.herokuapp.com/items`, {
      method: "POST",
      body: form,
    })
      .then((r) => r.json())
      .then((imageObj) => {
        // console.log(imageObj.image);
        this.setState(
          {
            image: imageObj.image,
          },
          () => this.createPost()
        );
      });
  };
  createPost = () => {
    const currentStateObj = {
      article_text: this.state.article,
      title: this.state.title,
      image: this.state.image,
      user_id: this.props.currentUser.id,
      reviews: [],
    };
    fetch(`https://home-barista-api.herokuapp.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(currentStateObj),
    })
      .then((r) => r.json())
      .then((newlyCreatedPost) => {
        // this.setState(newlyCreatedPost);
        this.props.addPostToCurrentUser(newlyCreatedPost);
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
              label="Upload Image"
              name="image" // type="file" value={this.state.image}
              onChange={this.onChange}
              type="file"
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
        {this.state.createForm ? this.createPostForm() : null}
        {this.state.uploadPhoto ? this.createUploadProfilePicForm() : null}
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
                {/* <NewItemForm /> */}
              </Grid.Column>
              <Grid.Column width={9}>
                <h3>Bio</h3>
                <p>{this.props.currentUser.bio}</p>
                <h5>Favorite Coffee Blend/Origin</h5>
                <span>{this.props.currentUser.current_coffee_beans}</span>
                <h5>Coffee Medium</h5>
                <span>{this.props.currentUser.coffee_medium}</span>
              </Grid.Column>
              <Grid.Column width={2}>
                <ProfileSideBar
                  createPost={this.handleForm}
                  toggleUploadPhoto={this.toggleUploadPhoto}
                />
              </Grid.Column>
            </Grid>
          </Segment>
          <MyPostsContainer
            updateFeedObj={this.props.updateFeedObj}
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
