import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceryList: ["eggs", "milk", "beer", "apples", "chips", "guacamole"]
    };
  }
  render() {
    let food = this.state.groceryList.map((element, index) => {
      return (
        <div key={index}>
          <h3>{element}</h3>
        </div>
        // we wrapped the h3 inside a <div> to make it easier to style it in the future
      );
    });
    return <div className="App">{food}</div>;
  }
}

export default App;
