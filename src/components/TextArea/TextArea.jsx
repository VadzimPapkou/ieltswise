import React from "react";
import classes from "./TextArea.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { validityIconsPaths } from "../../common";

const defaultRegister = () => {};

/**
 *
 * @param {string} className
 * @param {string} helperText
 * @param {"valid" | "invalid" | "default"} validityState
 * @param {string} validationMessage
 * @param {function: Object} register
 * @param textAreaProps
 * @returns {Element}
 * @constructor
 */
export const TextArea = ({
  className,
  helperText,
  validityState,
  validationMessage,
  register = defaultRegister,
  ...textAreaProps
}) => {
  return (
    <div className={clsx(classes.root, className)} data-validity={validityState}>
      {helperText && <div className={clsx(classes.helperText, "p2")}>{helperText}</div>}
      <textarea className={classes.textArea} {...register()} {...textAreaProps} />
      {validityState !== "default" && (
        <div className={classes.validationResult}>
          <Image alt="" src={validityIconsPaths[validityState]} width={16} height={16} />
          <p className={clsx(classes.validationMessage, "p2")}>{validationMessage}</p>
        </div>
      )}
    </div>
  );
};
