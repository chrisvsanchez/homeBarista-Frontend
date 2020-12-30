import React from "react";
import SignUp from "./SignUp";
import Login from "./Login/Login";
class Home extends React.Component {
  state = {
    loginForm: true,
    signUpForm: false,
  };
  toggleForm = () => {
    this.setState({
      loginForm: !this.state.loginForm,
      signUpForm: !this.state.signUpForm,
    });
  };
  render() {
    return (
      <>
        <div className="home">
          {!this.props.currentUser ? (
            <>
              {this.state.loginForm ? (
                <Login
                  handleLogin={this.props.handleLogin}
                  toggleForm={this.toggleForm}
                />
              ) : null}
              {this.state.signUpForm ? (
                <SignUp
                  handleLogin={this.props.handleLogin}
                  toggleForm={this.toggleForm}
                />
              ) : null}
            </>
          ) : null}
        </div>
      </>
    );
  }
}
export default Home;
