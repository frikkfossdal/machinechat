import React, { useState } from "react";
import Auto from "./Auto";

import Queue from "./Queue";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      extractMode: false,
      commands: [
        { type: "home", code: 2321 },
        { type: "home", code: 3212 },
        { type: "home", code: 5421 },
      ],
    };
  }
  getSuggestion(d) {
    if (d.subData != undefined) {
      this.setState({ extractMode: true });
    } else {
      this.addCommand(d);
      console.log(this.state);
    }
  }
  exitQueryMode() {
    this.setState({ extractMode: false });
  }
  addCommand(newCommand) {
    this.state.commands.push(newCommand);
  }
  handleChange() {
    this.setState({ showQuery: true });
  }

  render() {
    return (
      <div>
        <Auto addCommand={this.addCommand.bind(this)} />
        <Queue commands={this.state.commands} />
      </div>
    );
  }
}

export default Input;
