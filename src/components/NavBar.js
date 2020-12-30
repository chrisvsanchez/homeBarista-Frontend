import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import MyImage from "./Images/Home_barista_logo_white.png";
class NavBar extends React.Component {
  state = { activeItem: "home", userSearch: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
      <div className="ui inverted menu" id="menu" style={{ margin: "0rem " }}>
        <Image className="image" size={"tiny"} right="true" src={MyImage} />
        <Link className="item" to="/Home">
          Home
        </Link>
        {this.props.currentUser ? (
          <>
            <Link className="item" to="/profilePage">
              Profile Page
            </Link>

            <Link className="item" to="/Feed">
              Feed
            </Link>

            <Link className="item" to="/" onClick={this.props.logout}>
              Logout
            </Link>
          </>
        ) : null}
      </div>
    );
  }
}

export default NavBar;
