import React from "react";
import classes from "./TextField.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { validityIconsPaths } from "../../common";

const defaultRegister = () => {};

/**
 *
 * @param helperText
 * @param {"valid" | "invalid" | "default"} validityState
 * @param string validationMessage
 * @param className
 * @param register
 * @param inputParams
 * @returns {Element}
 * @constructor
 */
const TextField = ({
  helperText,
  validityState = "default",
  validationMessage,
  className,
  register = defaultRegister,
  ...inputParams
}) => {
  return (
    <div className={clsx(classes.textFieldContainer, className)} data-validity={validityState}>
      {helperText && <div className={clsx(classes.helperText, "p2")}>{helperText}</div>}
      <input type="text" className={clsx(classes.textField, "p1")} {...inputParams} {...register()} />
      {validityState !== "default" && (
        <div className={classes.validationResult}>
          <Image alt="" src={validityIconsPaths[validityState]} width={16} height={16} />
          <p className={clsx(classes.validationMessage, "p2")}>{validationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;
