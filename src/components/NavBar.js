import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import MyImage from "/Users/chrissanchez/Desktop/HomeBarista/homebarista-frontend/src/Images/Home_barista_logo_white.png";
class NavBar extends React.Component {
  state = { activeItem: "home", userSearch: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div class="ui inverted menu" id="menu">
          <a class="image">
            <Image size={"tiny"} right floated src={MyImage} />
          </a>
          <a class="item active">
            <Link to="/Home">Home</Link>
          </a>
          <a class="item">
            <Link to="/profilePage">Profile Page</Link>
          </a>
          <a class="item">
            <Link to="/feed" exact>
              {" "}
              Feed{" "}
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
