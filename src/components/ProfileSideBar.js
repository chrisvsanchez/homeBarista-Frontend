import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const ProfileSideBar = (props) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a" onClick={props.createPost}>
        <Icon name="file outline" />
        Create Post
      </Menu.Item>
      <Menu.Item as="a" onClick={props.toggleUploadPhoto}>
        <Icon name="cloud upload" />
        Upload Profile Pic
      </Menu.Item>
      <Link to="/Feed">
        <Menu.Item>
          <Icon name="feed" />
          Feed
        </Menu.Item>
      </Link>
      <Link to="/Find">
        <Menu.Item>
          <Icon name="find" />
          Find Baristas
        </Menu.Item>
      </Link>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="/images/wireframe/paragraph.png" />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default ProfileSideBar;
