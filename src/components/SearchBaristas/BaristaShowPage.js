import React from "react";
import { Grid, Image, Header, Divider, Card } from "semantic-ui-react";
import CardTemplate from "../CardTemplate";
class BaristaShowPage extends React.Component {
  state = {
    currentBarista: [],
    currentPosts: [],
  };
  turnPostsToCards = () => {
    return this.state.currentPosts.map((post) => (
      <CardTemplate
        id={post.id}
        post={post}
        image={post.image}
        title={post.title}
        article_text={post.article_text}
      />
    ));
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then((r) => r.json())
      .then((currentUser) => {
        // console.log("this", currentUser);
        this.setState({
          currentBarista: currentUser,
          currentPosts: currentUser.posts,
        });
      });
  }
  render() {
    const {
      bio,
      name,
      profile_img,
      coffee_medium,
      current_coffee_beans,
    } = this.state.currentBarista;
    return (
      <div className="barista-show-container">
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Image centered circular size="small" src={profile_img}></Image>
              <Header textAlign="center" as="h2">
                {name}
              </Header>

              <Header as="h5" textAlign="center">
                <b>Coffee Medium: </b>
                {coffee_medium}
              </Header>
              <Header as="h5" textAlign="center">
                {current_coffee_beans}
              </Header>
              <Header as="h5" textAlign="center">
                {bio}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Divider />
        </Grid>
        <Header as="h1" textAlign="center">
          {name}'s Posts
        </Header>

        <Card.Group itemsPerRow={2}>{this.turnPostsToCards()}</Card.Group>
      </div>
    );
  }
}
export default BaristaShowPage;
