import React, { useState } from "react";
import Auto from "./Auto";
import Dialog from "./Dialog";
import Queue from "./Queue";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      extractMode: false,
      currentQuery: "",
      commands: [],
    };
  }
  joke(data) {
    this.setState({ currentQuery: data });
  }
  goIntoQueryMode(d) {
    this.setState({ extractMode: true });
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
        <Auto ok={this.goIntoQueryMode.bind(this)} />
        <Dialog
          visible={this.state}
          ok={this.exitQueryMode.bind(this)}
          newCom={this.addCommand.bind(this)}
        />
        <Queue commands={this.state.commands} />
      </div>
    );
  }
}

export default Input;
