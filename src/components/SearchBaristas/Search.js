import React from "react";

class Search extends React.Component {
  render() {
    return (
      <>
        <div className="ui search">
          <div className="ui icon input">
            <input
              // onChange={}
              // value={}
              placeholder={"Search"}
              className="prompt"
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
