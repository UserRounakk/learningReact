import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APPLE BALL REACT</h1>
        <Person name="Abisam" age="18">
          My Hobbies: Coding
        </Person>
      </div>
    );
  }
}

export default App;
