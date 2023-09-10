import React from "react";
import classes from "./Modal.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import Image from "next/image";

const Modal = ({ children, className, onCloseClick }) => {
  return (
    <div className={classes.modalWrapper}>
      <button className={classes.closeModal} onClick={onCloseClick}>
        <Image alt="close modal" src="/close.svg" width={24} height={24}/>
      </button>
      <div className={clsx(className, classes.modal)}>{children}</div>
    </div>
  );
};

export default Modal;
