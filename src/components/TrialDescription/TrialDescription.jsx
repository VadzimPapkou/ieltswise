import React from "react";
import classes from "./TrialDescription.module.scss";

const TrialDescription = ({}) => {
  return (
    <div className={classes.trialDescription}>
      <div className={classes.description1}>
        <h3 className={classes.title}>What will a FREE TRIAL SESSION give you?</h3>
        <p>We will discuss the reasons why you want to improve your English.</p>
        <Dots />
      </div>
      <div className={classes.description2}>
        <p>We will plan a Learning Strategy together to allow you to achieve your goals.</p>
        <Dots />
      </div>
      <div className={classes.description3}>
        <p>
          At the end of the FREE SESSION, I will suggest how many sessions you may need <br /> for the Leaning Strategy{" "}
          <br />
          to be successfully achieved.
        </p>
        <Dots />
      </div>
      <div className={classes.trialDescriptionMobile}></div>
    </div>
  );
};

const Dots = () => (
  <div className={classes.dots}>
    <div className={classes.dot}></div>
    <div className={classes.dot}></div>
    <div className={classes.dot}></div>
  </div>
);

export default TrialDescription;
