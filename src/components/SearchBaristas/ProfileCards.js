import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
// import CardTemplate from "./CardTemplate";
class ProfileCard extends React.Component {
  turnToCard = () => {
    return this.props.allUsers
      .filter(
        (user) =>
          user.coffee_medium
            .toUpperCase()
            .includes(this.props.keyword.toUpperCase()) ||
          user.current_coffee_beans
            .toUpperCase()
            .includes(this.props.keyword.toUpperCase())
      )
      .map((user) => {
        // return this.props.allUsers.map((user) => {
        return (
          <Card key={user.id}>
            <Image src={user.profile_img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span className="date">
                  <strong>Coffee Medium: </strong>
                  {user.coffee_medium}
                </span>
              </Card.Meta>
              <Card.Description>
                <strong>Favorite Blend: </strong>
                {user.current_coffee_beans}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="pencil" />
                {user.posts.length} Posts
              </a>
            </Card.Content>
          </Card>
        );
      });
  };
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={6}>{this.turnToCard()}</Card.Group>
      </div>
    );
  }
}
export default ProfileCard;
