"use client";

import classes from "./FreeTrial.module.scss";
import React from "react";
import TextField from "../TextField/TextField";
import clsx from "clsx";
import Button from "../Button/Button";

type FreeTrialProps = {};

const FreeTrial: React.FC = ({}: FreeTrialProps) => {
  return (
    <div className={classes.freeTrial}>
      <h2 className={clsx(classes.header, "h1-like")}>
        Book for a FREE 30 min trial session
      </h2>
      <form className={classes.bookTrialForm} onSubmit={handleSubmit}>
        <TextField helperText="Name" placeholder="Alex" />
        <TextField helperText="E-mail" placeholder="mail@gmail.com" />
        <Button variant="large" type="submit">
          Book Trial
        </Button>
      </form>
      <p className={classes.agree}>
        By clicking “Book”, you agree to the processing of Personal data.
      </p>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
  }
};

export default FreeTrial;
