import React, {MouseEventHandler} from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";
import Loader from "../Loader/Loader";

type ButtonProps = {
  type: "small" | "large" | "card" | "text" | "icon",
  children?: JSX.Element[] | JSX.Element | string | string[],
  icon?: string,
  loading?: boolean,
  disabled?: boolean,
  onClick?: MouseEventHandler
}

const Button = ({type, children, loading, disabled, onClick}: ButtonProps) => {
  const buttonClassName = clsx({
    [classes.button]: true,
    [classes.smallButton]: type === "small",
    [classes.largeButton]: type === "large",
    [classes.cardButton]: type === "card",
    [classes.textButton]: type === "text",
    [classes.iconButton]: type === "icon",
    [classes.disabled]: disabled,
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {loading && type === "text" &&
      <>
        <span style={{marginRight: "4px"}}>{children}</span>
        <Loader secondaryColor={"var(--primary-500)"}/>
      </>
      }
      {loading && type !== "text" && <Loader/>}
      {!loading && <span>{children}</span>}
    </button>
  );
};

export default Button;