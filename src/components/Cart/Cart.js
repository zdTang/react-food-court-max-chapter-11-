import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <h5 className={classes.h5}>{props.item.name}</h5>
      <p className={classes.description}>{props.item.description}</p>
      <div className={classes.price}>{props.item.price}</div>
    </div>
  );
};

export default Cart;
