import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }
  inputHandler(e) {
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    // when we update multiple states in one shot, the name='' for the
    // input must match the naming convention inside of this.state
  }

  loginHandler() {
    console.log(this.state);
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    // loginHandler bind needed
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <input
          name="username"
          onChange={this.inputHandler}
          // value={this.state.username}
          placeholder="Username"
        />
        <input
          name="password"
          onChange={this.inputHandler}
          // value={this.state.password}
          placeholder="Password"
        />
        <button onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}

export default Login;
