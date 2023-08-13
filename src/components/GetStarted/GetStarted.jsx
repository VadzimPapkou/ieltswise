"use client";
import React from "react";
import classes from "./GetStarted.module.scss";
import clsx from "clsx";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const GetStarted = ({}) => {
  return (
    <div className={classes.getStarted}>
      <h2 className={clsx(classes.title, "h2-like")}>
        Let me help you reach your goal!
      </h2>
      <p className={classes.description}>
        Explore my sessions that will help you succeed and overcome any
        difficulties you may encounter.
      </p>
      <Button variant="secondary" className={classes.getStartedButton}>
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
