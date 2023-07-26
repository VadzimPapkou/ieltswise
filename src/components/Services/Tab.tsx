import classes from "./Services.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import React from "react";

const Tab = ({ title, children }) => {
  return (
    <div className={classes.tab}>
      <div className={classes.tabTitleInfo}>
        <h3 className={clsx("h3-like")}>{title}</h3>
        <div className={classes.tabInfo}>
          <span className="p1">
            <b>$15</b>
          </span>
          <span className="p1">
            <b>1 hour</b>
          </span>
          <span className="p1">
            <b>Google meet</b>
          </span>
          <span className="p2">Price</span>
          <span className="p2">Duration</span>
          <span className="p2">Platform</span>
        </div>
      </div>
      <div className={clsx("p1", classes.tabDescription)}>{children}</div>
    </div>
  );
};

export default Tab;
