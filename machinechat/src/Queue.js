import { render } from "@testing-library/react";
import React from "react";

export default function Queue(props) {
  {
    console.log("queue is doing something");
  }
  return (
    <div class="commands">
      <p>Commands lives here</p>
      {props.commands.map((c) => (
        <p>{c.code}</p>
      ))}
    </div>
  );
}
