import React from "react";
import Modal from "../UI/Modal";
import OrderForm from "./OrderForm";

const Order = (props) => {
  return (
    <Modal>
      <OrderForm onClose={props.onClose} />
    </Modal>
  );
};

export default Order;
