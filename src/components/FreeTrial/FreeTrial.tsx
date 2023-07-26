"use client";

import classes from "./FreeTrial.module.scss";
import React from "react";
import TextField from "../TextField/TextField";
import clsx from "clsx";
import Button from "../Button/Button";
import Link from "next/link";

type FreeTrialProps = {};

const FreeTrial: React.FC = ({}: FreeTrialProps) => {
  return (
    <div className={classes.freeTrial}>
      <h2 className={clsx(classes.header, "h2-like")}>
        Book for a FREE 30 min trial session
      </h2>
      <form className={classes.bookTrialForm} onSubmit={handleSubmit}>
        <TextField placeholder="Name" />
        <TextField placeholder="E-mail" />
        <Button variant="primary" type="submit">
          Book a Free Chat
        </Button>
      </form>
      <p className={classes.agree}>
        By clicking “Book”, you agree to the processing of{" "}
        <Link href="" className={classes.personalData}>
          Personal data.
        </Link>
      </p>
    </div>
  );

  function handleSubmit(e: any) {
    e.preventDefault();
  }
};

export default FreeTrial;
