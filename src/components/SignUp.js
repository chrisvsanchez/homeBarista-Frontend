import React from "react";
// import loginImage from "./Images/login.svg";
import { Form, Button } from "semantic-ui-react";
class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    bio: "",
    name: "",
    currentCoffeeBeans: "",
    coffeeMedium: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      email: this.state.email,
      password: this.state.password,
      bio: this.state.bio,
      name: this.state.name,
      currentCoffeeBeans: this.state.currentCoffeeBeans,
      coffeeMedium: this.state.coffeeMedium,
    };
    fetch("https://home-barista-api.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
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
      <div className="sign-up-box">
        <div className="base-container">
          <div className="header">Sign Up</div>
          <div className="content">
            <div className="image">
              {/* <img src={loginImage} alt="login logo" /> */}
            </div>
            <div className="form">
              <Form
                size="large"
                inverted
                className="form-group"
                onSubmit={this.handleSubmit}
              >
                <label>
                  <h3>
                    <strong>Full Name</strong>
                  </h3>
                </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder={"First and Last Name"}
                />
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
                <label>
                  <h3>
                    <strong>Bio</strong>
                  </h3>
                </label>
                <input
                  type="text"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  placeholder={"Tell me about yourself"}
                />
                <label>
                  <h3>
                    <strong>Current Coffee Beans</strong>
                  </h3>
                </label>
                <input
                  type="text"
                  name="currentCoffeeBeans"
                  value={this.state.currentCoffeeBeans}
                  onChange={this.handleChange}
                  placeholder={"What Coffee Beans are you using?"}
                />
                <label>
                  <h3>
                    <strong>Favorite Coffee Medium</strong>
                  </h3>
                </label>
                <input
                  type="text"
                  name="coffeeMedium"
                  value={this.state.coffeeMedium}
                  onChange={this.handleChange}
                  placeholder={"Espresso/Drip/etc.."}
                />
                <Button size="large" fluid inverted type="submit">
                  SignUp
                </Button>
              </Form>
            </div>
          </div>
          <button onClick={this.props.toggleForm}>Log in</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
