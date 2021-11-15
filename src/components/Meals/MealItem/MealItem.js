import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const CartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    console.log("mealItem", amount);
    let item = {
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    };
    console.log("Item", item);
    CartCtx.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
