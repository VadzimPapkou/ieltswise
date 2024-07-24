import React from "react";
import classes from "./Modal.module.scss";
import clsx from "clsx";
import Image from "next/image";

const Modal = ({ children, className, onCloseClick, wrapperClass }) => {
  return (
    <div className={clsx(classes.modalWrapper, wrapperClass)}>
      <button className={classes.closeModal} onClick={onCloseClick}>
        <Image alt="close modal" src="/close.svg" width={24} height={24} />
      </button>
      <div className={clsx(className, classes.modal)}>{children}</div>
    </div>
  );
};

export default Modal;
