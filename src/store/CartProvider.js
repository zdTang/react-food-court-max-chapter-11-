import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

// create default cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// create Reducer function first
// the first argument is passed by the React, which is old state snapshot
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // The concat() method is used to merge two or more arrays.
    // This method does not change the existing arrays,
    // but instead returns a new array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // At this moment, the item will be added to the [] whatever it was already existed or not
    // We don't like that, we prefer {name, amount} format

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    ///const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
// use Reducer:   [state,dispatch]=useReducer(Reducer,defaultState)

const CartProvider = (props) => {
  // cartState:always to be the latest state
  // dispatchCartAction: Accept args and update state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Two kinds of states, add a new item or add a existed item
  // For new item, add an item object and a number
  // For the existed item, need update the number
  // Be aware, the item is an object:  {name: sushi, amount:5}
  const addItemToCartHandler = (item) => {
    // Each reducer should follow a fixed format
    // Here I use this format: ActionType, Data
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemToCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item });
  };

  // this is the data shared with context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
