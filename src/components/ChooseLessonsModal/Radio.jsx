import React from "react";
import classes from "./Radio.module.css";
import clsx from "clsx";

const Radio = ({className, label, ...inputParams}) => {
  return (
    <label className={clsx(className, classes.root)}>
      <span className={classes.button}>
        <input className={classes.input} type="radio" hidden {...inputParams} />
        <span className={classes.mark}></span>
      </span>

      <p className={classes.label}>{label}</p>
    </label>
  );
};

export default Radio;