import React from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";
import ArrowRight from "../../icon-components/ArrowRight";
import { secondaryText } from "../../common";

const Button = ({ variant, children, loading, disabled, className, ...buttonParams }) => {
  const buttonClassName = clsx({
    [classes.button]: true,
    [classes[variant]]: true,
    [classes.disabled]: disabled,
    [String(className)]: className,
    p1: true,
  });

  const buttonComponents = {
    link: LinkButton,
    pill: PillButton,
    primary: PrimaryButton,
    secondary: SecondaryButton,
    text: TextButton,
    icon: IconButton,
  };

  const ButtonComponent = buttonComponents[variant];

  return (
    <ButtonComponent
      buttonClassName={buttonClassName}
      buttonParams={buttonParams}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ButtonComponent>
  );
};

const LinkButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
    <ArrowRight color={disabled ? secondaryText : "#fff"} className={classes.linkArrow} />
  </button>
);

const PillButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const PrimaryButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const SecondaryButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const TextButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const IconButton = ({ children, buttonClassName, buttonParams, disabled, loading }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

export default Button;
