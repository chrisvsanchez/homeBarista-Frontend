import React from "react";
import loginImage from "../Images/login.svg";
import "./style.scss";
import { Form, Button } from "semantic-ui-react";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("yooo");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        const { user, token } = data;
        this.props.handleLogin(user);
        localStorage.token = token;
      });
  };
  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImage} alt="login logo" />
          </div>
          <div className="form">
            <Form
              size="medium"
              textAlign="center"
              inverted
              className="form-group"
              onSubmit={this.handleSubmit}
            >
              <label>
                <h3>
                  <strong>Email</strong>
                </h3>
              </label>
              <input
                type="text"
                name="email"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="johnDoe@gmail.com"
              />

              <label>
                <h3>
                  <strong>Password</strong>
                </h3>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder={"●●●●●●●●●●"}
              />

              <Button
                className="footer"
                size="large"
                fluid
                inverted
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
