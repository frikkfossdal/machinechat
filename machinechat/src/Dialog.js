import React from "react";
import { useForm } from "react-hook-form";

export default function Dialog(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const commandPck = {type: "home()", coord: data}
    props.newCom(commandPck)
    props.ok();
  };

  if (props.visible.extractMode === false) {
    return null;
  } else {
    return (
      <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input  name="x" ref={register} />
          <input name="y" ref={register} />
          <button style = {{display: "none"}} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
