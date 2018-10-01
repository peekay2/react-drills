import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };

    // this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    console.log(event);
    this.setState({ userInput: event });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          placeholder="type here"
          onChange={e => this.inputHandler(e.target.value)}
        />
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;
