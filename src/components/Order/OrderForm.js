import React from "react";
import useValidate from "../../hook/use-validate";

const OrderForm = (props) => {
  console.log("basic from run !");

  // Control state of firstName
  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValueValid: isFirstNameValid,
    isValueDisplayOK: isNameDisplayOK,
    valueStyle: nameStyle,
    reset: nameReset,
  } = useValidate((item) => item.trim().length !== 0);

  // Control state of last Name
  const {
    enteredValue: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    isValueValid: isLastNameValid,
    isValueDisplayOK: isLastNameDisplayOK,
    valueStyle: lastNameStyle,
    reset: lastNameReset,
  } = useValidate((item) => item.trim().length !== 0);

  // Control state of Email
  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValueValid: isEmailValid,
    isValueDisplayOK: isEmailDisplayOK,
    valueStyle: emailStyle,
    reset: emailReset,
  } = useValidate((item) => item.includes("@"));

  const isFormValid = isEmailValid && isLastNameValid && isFirstNameValid;
  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log("valid value");
      nameReset();
      lastNameReset();
      emailReset();

      console.log(enteredName);
      console.log(enteredLastName);
      console.log(enteredEmail);
    } else {
      console.log("invalid value!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <div className={nameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {!isNameDisplayOK && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {!isLastNameDisplayOK && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {!isEmailDisplayOK && (
          <p className="error-text">Entered email address is not valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
      <div className="form-actions">
        <button onClick={props.onClose}>Close</button>
      </div>
    </form>
  );
};

export default OrderForm;
