import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const closeCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShow && <Cart onClose={closeCartHandler} />}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
