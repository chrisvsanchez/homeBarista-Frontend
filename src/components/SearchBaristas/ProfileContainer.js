import React from "react";
import Search from "./Search";
import ProfileCards from "./ProfileCards";
class ProfileContainer extends React.Component {
  state = {
    userInput: "",
    allUsers: [],
  };
  componentDidMount() {
    fetch("https://home-barista-api.herokuapp.com/users")
      .then((r) => r.json())
      .then((userObjs) => {
        // console.log(userObjs, "searchPage");
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
      <div className="profile-container">
        <Search handleInput={this.handleInput} />
        <ProfileCards
          allUsers={this.state.allUsers}
          keyword={this.state.userInput}
        />
      </div>
    );
  }
}
export default ProfileContainer;
