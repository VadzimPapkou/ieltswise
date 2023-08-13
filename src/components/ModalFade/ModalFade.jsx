"use client";

import React, { useEffect } from "react";
import classes from "./ModalFade.module.scss";
import clsx from "clsx";
import { createPortal } from "react-dom";

function lockScroll() {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.removeProperty("overflow");
  };
}

const ModalFade = ({ children, onClickOutside }) => {
  useEffect(lockScroll);
  return (
    <>
      {createPortal(
        <div className={classes.modalFade} onClick={handleClick}>
          {children}
        </div>,
        document.body
      )}
    </>
  );

  function handleClick(e) {
    if (e.target.classList.contains(classes.modalFade)) onClickOutside();
  }
};

export default ModalFade;
