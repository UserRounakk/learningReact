import React, { Component } from "react";

class Person extends Component {
  render(props) {
    return (
      <div>
        <h1>
          I am {this.props.name} and I am {this.props.age} years old
        </h1>
      </div>
    );
  }
}

export default Person;
