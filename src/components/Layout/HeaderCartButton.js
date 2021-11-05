import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
export const HeaderCartButton = () => {
  const ctx = useContext(CartContext);

  const clickHandler = () => {
    ctx.showCart();
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>88</span>
    </button>
  );
};
