import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const closeCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShow && <Cart onClose={closeCartHandler} />}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
