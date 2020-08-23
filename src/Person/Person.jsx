import React, { Component } from "react";

class Person extends Component {
  render(props) {
    return (
      <div>
        <h1 onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </h1>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
