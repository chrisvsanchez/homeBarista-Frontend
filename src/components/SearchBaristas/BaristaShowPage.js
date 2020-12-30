import React from "react";
import { Grid, GridColumn, Image } from "semantic-ui-react";

class BaristaShowPage extends React.Component {
  state = {
    currentBarista: null,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/3`)
      // fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then((r) => r.json())
      .then((currentUser) => {
        console.log("this", currentUser);
        this.setState({
          currentBarista: currentUser,
        });
      });
  }
  render() {
    console.log(this.state.currentUser);

    return (
      <div>
        <Grid>
          <h1>yooo</h1>
          <Grid.row>
            <GridColumn>
              <Image centered></Image>
            </GridColumn>
          </Grid.row>
        </Grid>
      </div>
    );
  }
}
export default BaristaShowPage;
