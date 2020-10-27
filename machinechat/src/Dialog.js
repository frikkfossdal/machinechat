import React from "react";
import { useForm } from "react-hook-form";

export default function Dialog(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  if (props.visible.showQuery === false) {
    return null;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            autoFocus
            placeholder="x"
            name="coord.x"
            ref={register}
          />
          <input type="text2" placeholder="y" name="coord.y" ref={register} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
