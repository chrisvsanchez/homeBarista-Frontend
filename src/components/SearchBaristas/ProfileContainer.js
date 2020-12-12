import React from "react";
import Search from "./Search";
import ProfileCards from "./ProfileCards";
class ProfileContainer extends React.Component {
  state = {
    userInput: "",
    allUsers: {},
  };
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((userObjs) => {
        console.log(userObjs, "searchPage");
        this.setState({
          allUsers: userObjs,
        });
      });
  }
  render() {
    return (
      <>
        <Search />
        <ProfileCards allUsers={this.state.allUsers} />
      </>
    );
  }
}
export default ProfileContainer;
