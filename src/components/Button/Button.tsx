import React from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";
import ArrowRight from "../../icon-components/ArrowRight";
import { secondaryText } from "../../colors";

type ButtonProps = {
  variant: "pill" | "primary" | "secondary" | "text" | "icon";
  children?: JSX.Element[] | JSX.Element | string | string[];
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<any>;

const Button = ({
  variant,
  children,
  loading,
  disabled,
  className,
  ...buttonParams
}: ButtonProps) => {
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

const LinkButton = ({ children, buttonClassName, buttonParams, disabled }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
    <ArrowRight
      color={disabled ? secondaryText : "#fff"}
      className={classes.linkArrow}
    />
  </button>
);

const PillButton = ({ children, buttonClassName, buttonParams }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const PrimaryButton = ({ children, buttonClassName, buttonParams }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const SecondaryButton = ({ children, buttonClassName, buttonParams }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const TextButton = ({ children, buttonClassName, buttonParams }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

const IconButton = ({ children, buttonClassName, buttonParams }) => (
  <button className={buttonClassName} {...buttonParams}>
    {children}
  </button>
);

export default Button;
