import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredStr: "",
      foods: ["pho", "sushi", "pad thai", "chow mein", "spring rolls"]
    };
  }

  inputHandler(e) {
    this.setState({ filteredStr: e });
  }

  render() {
    let display = this.state.foods.filter((element, index) => {
        return element.includes(this.state.filteredStr);})
        .map((element, index) => {
        return (
          <div>
            <h2 key={index}>{element}</h2>
          </div>
        );
      });
    return (
      <div className="App">
        <input
          placeholder="search foods"
          onChange={e => this.inputHandler(e.target.value)}
        />
        {display}
        {/* {this.state.foods} */}
      
      </div>
    );
  }
}

export default App;
