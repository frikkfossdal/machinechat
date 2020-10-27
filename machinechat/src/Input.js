import React, { useState } from "react";
import Auto from "./Auto";
import Dialog from "./Dialog";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      extractMode: "false",
      showQuery: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  goIntoQueryMode() {
    this.setState({ extractMode: "true", showQuery: true });
  }
  handleChange() {
    this.setState({ showQuery: true });
    console.log("it worked ");
  }

  render() {
    return (
      <div>
        <p>{this.state.extractMode}</p>
        <Auto ok={this.goIntoQueryMode.bind(this)} />
        <Dialog visible={this.state} />
      </div>
    );
  }
}

export default Input;
