import React from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";
import Loader from "../Loader/Loader";

type ButtonProps = {
  variant: "small" | "large" | "card" | "text" | "icon";
  children?: JSX.Element[] | JSX.Element | string | string[];
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<any>;

const Button = ({
  variant,
  children,
  loading,
  disabled,
  ...buttonParams
}: ButtonProps) => {
  const buttonClassName = clsx({
    [classes.button]: true,
    [classes.smallButton]: variant === "small",
    [classes.largeButton]: variant === "large",
    [classes.cardButton]: variant === "card",
    [classes.textButton]: variant === "text",
    [classes.iconButton]: variant === "icon",
    [classes.disabled]: disabled,
  });

  return (
    <button className={buttonClassName} {...buttonParams}>
      {loading && variant === "text" && (
        <>
          <span style={{ marginRight: "4px" }}>{children}</span>
          <Loader secondaryColor={"var(--primary-500)"} />
        </>
      )}
      {loading && variant !== "text" && <Loader />}
      {!loading && <span>{children}</span>}
    </button>
  );
};

export default Button;
