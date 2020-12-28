import React from "react";
import Search from "./Search";
import ProfileCards from "./ProfileCards";
class ProfileContainer extends React.Component {
  state = {
    userInput: "",
    allUsers: [],
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

  handleInput = (keyword) => {
    this.setState({
      userInput: keyword,
    });
  };
  render() {
    return (
      <>
        <Search handleInput={this.handleInput} />
        <ProfileCards
          allUsers={this.state.allUsers}
          keyword={this.state.userInput}
        />
      </>
    );
  }
}
export default ProfileContainer;
