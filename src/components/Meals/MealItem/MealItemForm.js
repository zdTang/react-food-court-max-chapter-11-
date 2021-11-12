import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, SetAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInputRef.current.value);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // convert string to number
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountIsValid(false);
    } else {
      props.onAddToCart(enteredAmountNumber); // pass data to Parent "MealItem"
      SetAmountIsValid(true);
    }
  };

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
