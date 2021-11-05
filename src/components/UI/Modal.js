import React from "react";
import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const mountPoint = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, mountPoint)}
      {reactDom.createPortal(<Overlay>{props.children}</Overlay>, mountPoint)}
    </>
  );
};

export default Modal;
