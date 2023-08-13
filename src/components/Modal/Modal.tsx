import React from "react";
import classes from "./Modal.module.scss";
import clsx from "clsx";

type ModalProps = {};

const Modal: React.FC = ({ children, className }: ModalProps) => {
  return <div className={clsx(className, classes.modal)}>{children}</div>;
};

export default Modal;
