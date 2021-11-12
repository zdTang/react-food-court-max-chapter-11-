import React from "react";
import classes from "./Input.module.css";

// As we use ref with the customized "input", the native "ref" doesn't work
// But we can use this format to forward "ref" into the customized component

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
