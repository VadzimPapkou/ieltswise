"use client";

import React, { Fragment } from "react";
import classes from "./TrialDescriptionMobile.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import Image from "next/image";

const TrialDescriptionMobile = () => {
  const { width } = useWindowSize();
  if (width > 900) return null;
  return (
    <Fragment>
      <div className={classes.trialDescriptionMobile}>
        <h3 className={classes.title}>What will a FREE TRIAL SESSION give you?</h3>
        <ol className={classes.benefits}>
          <li>We will discuss the reasons why you want to improve your English.</li>
          <li>We will plan a Learning Strategy together to allow you to achieve your goals.</li>
          <li>
            At the end of the FREE SESSION, I will suggest how many sessions you may need for the Leaning Strategy to be
            successfully achieved.
          </li>
        </ol>
      </div>
      <div className={classes.discount}>
        <Image className={classes.percent} src="/percent.svg" width={234} height={246} alt="percent" />
        <h3 className={classes.discountTitle}>
          <span className={classes.primary}>BOOK FIVE SESSIONS</span> and get a{" "}
          <span className={classes.accent}>25% DISCOUNT.</span>
        </h3>
      </div>
    </Fragment>
  );
};

export default TrialDescriptionMobile;
