"use client";
import React, { forwardRef, useEffect, useState } from "react";
import classes from "./ModalFade.module.scss";
import { createPortal } from "react-dom";
import clsx from "clsx";

function lockScroll() {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.removeProperty("overflow");
  };
}

const ModalFade = forwardRef(({ children, onClickOutside }, ref) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  useEffect(lockScroll);

  return mounted
    ? createPortal(
        <div className={clsx(classes.modalFade, "modal")} onClick={handleClick} ref={ref}>
          {children}
        </div>,
        document.body
      )
    : null;

  function handleClick(e) {
    if (e.target.classList.contains(classes.modalFade)) onClickOutside();
  }
});

export default ModalFade;
