import React from "react";

import Login from "./Login/Login";
function Home(props) {
  return (
    <div>
      <Login handleLogin={props.handleLogin} />
    </div>
  );
}
export default Home;
