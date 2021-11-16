import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  let totalAmount = cartCtx.totalAmount.toFixed(2);
  // eliminate display "-0" on the Cart
  let displayAmount = totalAmount === -0 ? 0 : totalAmount;

  totalAmount = `$${displayAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const addOnItemHandler = (item) => {
    console.log(item);
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item, index) => (
        <CartItem
          key={index}
          price={item.price}
          name={item.name}
          amount={item.amount}
          // bind null can make sure the handler can receive the parameter ??!!
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={addOnItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
