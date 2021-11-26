import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Order from "./components/Order/Order";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [orderIsShow, setOrderIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const closeCartHandler = () => {
    setCartIsShow(false);
  };

  const showOrderHandler = () => {
    setCartIsShow(false); // close the Cart
    setOrderIsShow(true); // display the Order
  };

  const closeOrderHandler = () => {
    setOrderIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShow && (
          <Cart onClose={closeCartHandler} orderHandler={showOrderHandler} />
        )}
        <Meals />
        {orderIsShow && <Order onClose={closeOrderHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;
