import React from "react";
import { Input, Menu } from "semantic-ui-react";
class NavBar extends React.Component {
  state = { activeItem: "home", userSearch: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Feed"
            active={activeItem === "Feed"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Profile Page"
            active={activeItem === "Profile Page"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                value={this.state.userSearch}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
