import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartContext from "./components/store/cart-context";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCart = () => {
    setIsShowCart(true);
  };
  const hideCart = () => {
    setIsShowCart(false);
  };

  // "value" is key word, must use it.
  return (
    <CartContext.Provider value={{ showCart, hideCart }}>
      <Fragment>
        <Header />
        <main>
          {isShowCart && <Cart />}
          <Meals />
        </main>
      </Fragment>
    </CartContext.Provider>
  );
}

export default App;
