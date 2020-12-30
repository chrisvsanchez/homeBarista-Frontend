import React from "react";
import { Grid, GridColumn, Image, Segment, Header } from "semantic-ui-react";

class BaristaShowPage extends React.Component {
  state = {
    currentBarista: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then((r) => r.json())
      .then((currentUser) => {
        console.log("this", currentUser);
        this.setState({
          currentBarista: currentUser,
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
      posts,
      reviews,
    } = this.state.currentBarista;
    return (
      <div className="barista-show-container">
        <h1>BaristaPAGE </h1>
        <Grid columns="equal">
          <Grid.Row centered>
            <Image circular src={profile_img}></Image>
            <Header as="h2">{name}</Header>
          </Grid.Row>
          <Grid.Row>
            <GridColumn>
              <Segment>1</Segment>
            </GridColumn>
            <Grid.Column>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default BaristaShowPage;
