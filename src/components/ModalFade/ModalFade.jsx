"use client";
import React, { useEffect, useState } from "react";
import classes from "./ModalFade.module.scss";
import { createPortal } from "react-dom";

function lockScroll() {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.removeProperty("overflow");
  };
}

const ModalFade = ({ children, onClickOutside }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  useEffect(lockScroll);

  return mounted
    ? createPortal(
        <div className={classes.modalFade} onClick={handleClick}>
          {children}
        </div>,
        document.body
      )
    : null;

  function handleClick(e) {
    if (e.target.classList.contains(classes.modalFade)) onClickOutside();
  }
};

export default ModalFade;
