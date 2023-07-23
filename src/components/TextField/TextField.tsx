import React from "react";
import classes from "./TextField.module.scss";
import clsx from "clsx";
import Image from "next/image";

export type TextFieldValidityState =
  | "valid"
  | "warning"
  | "invalid"
  | "default";

type TextFieldProps = {
  helperText?: string;
  validityState?: TextFieldValidityState;
  validationMessage?: string;
} & React.InputHTMLAttributes<any>;

const validityIconsPaths = {
  valid: "./valid.svg",
  warning: "./warning.svg",
  invalid: "./invalid.svg",
};

const TextField = ({
  helperText,
  validityState = "default",
  validationMessage,
  className,
  ...inputParams
}: TextFieldProps) => {
  return (
    <div
      className={clsx(classes.textFieldContainer, className)}
      data-validity={validityState}
    >
      {helperText && (
        <div className={clsx(classes.helperText, "p2")}>{helperText}</div>
      )}
      <input
        type="text"
        className={clsx(classes.textField, "p1")}
        {...inputParams}
      />
      {validityState !== "default" && (
        <div className={classes.validationResult}>
          <Image
            alt=""
            src={validityIconsPaths[validityState]}
            width={16}
            height={16}
          />
          <p className={clsx(classes.validationMessage, "p2")}>
            {validationMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextField;
