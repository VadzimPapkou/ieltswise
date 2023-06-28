import React from "react";
import classes from "./TrialDescription.module.scss";
import clsx from "clsx";
import Image from "next/image";

type TrialDescriptionProps = {};

const TrialDescription: React.FC = ({}: TrialDescriptionProps) => {
  return (
    <div className={classes.trialDescription}>
      <div className={classes.description}>
        <h3 className={clsx(classes.header, "h4-like")}>
          What will a free trial session give you?
        </h3>
        <ol className={clsx(classes.benefits, "p1")}>
          <li>We will discuss your motivations to improve your English.</li>
          <li>
            It will also allow you to ask any questions you have and to speak to
            me about anything you want.
          </li>
          <li>
            At the end of the trial lesson, I will suggest how many lessons you
            will need and their duration for you to make progress.
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
          Also, if you purchase more than 5 sessions at once, you will receive a
          <span className={classes.discountValue}>&nbsp;5% DISCOUNT.</span>
        </p>
      </div>
    </div>
  );
};

export default TrialDescription;
