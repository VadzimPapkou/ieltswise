import React from "react";
import classes from "./Modal.module.scss";
import clsx from "clsx";

const Modal = ({ children, className }) => {
  return <div className={clsx(className, classes.modal)}>{children}</div>;
};

export default Modal;
