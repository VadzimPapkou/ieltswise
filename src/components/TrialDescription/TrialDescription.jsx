import React from "react";
import classes from "./TrialDescription.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "../Button/Button";

const TrialDescription = ({}) => {
  return (
    <div className={classes.trialDescription}>
      <div className={classes.description}>
        <h3 className={clsx(classes.header)}>
          What will a FREE TRIAL SESSION give you?
        </h3>
        <ol className={clsx(classes.benefits, "p1")}>
          <li className={clsx("p1", classes.benefit)}>
            We will discuss the reasons why you want to improve your English.
          </li>
          <li className={clsx("p1", classes.benefit)}>
            We will plan a Learning Strategy together to allow you to achieve
            your goals.
          </li>
          <li className={clsx("p1", classes.benefit)}>
            At the end of the FREE SESSION, I will suggest how many sessions you
            may need for the Leaning Strategy to be successfully achieved.
          </li>
        </ol>
      </div>
      <div className={classes.discount}>
        <Image
          className={classes.percent}
          alt="percent"
          src="./intersect.svg"
          width={267}
          height={221}
        />
        <p className={classes.discountText}>
          <span className={classes.primary}>BOOK FIVE SESSIONS</span> and get a
          <span className={classes.accent}>&nbsp;5% DISCOUNT.</span>
        </p>
      </div>
    </div>
  );
};

export default TrialDescription;
