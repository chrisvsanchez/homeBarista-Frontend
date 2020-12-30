import React from "react";

class Search extends React.Component {
  state = {
    userInput: "",
  };
  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
    this.props.handleInput(this.state.userInput);
  };
  render() {
    return (
      <>
        <div className="ui search">
          <div className="ui icon input" style={{ width: "50%" }}>
            <input
              className="search-input"
              onChange={this.handleChange}
              value={this.state.userInput}
              placeholder={"Search"}
              name="search"
            />
            <i className="search icon" />
          </div>
        </div>
      </>
    );
  }
}
export default Search;
