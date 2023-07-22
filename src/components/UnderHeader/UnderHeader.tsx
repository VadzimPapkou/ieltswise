import React from "react";
import classes from "./UnderHeader.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import Image from "next/image";

const UnderHeader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.underHeader}>
        <div className={classes.textBlock}>
          <p className={classes.upperTitle}>IELTSWISE EDUCATION</p>
          <h1 className={clsx("h1-like", classes.title)}>
            Online English Tutor to Fit{" "}
            <span className={classes.accent}>YOUR Schedule.</span>
          </h1>
          <p className={clsx("p1", classes.underTitle)}>
            The lessons take place online and are personalised to fit your
            needs. Lessons can be arranged to fit into your daily schedule:
            before work; after work; evenings and weekend slots are all
            available.
          </p>
          <div className={classes.textBlockButtons}>
            <Button variant="primary">Choose a Lessons</Button>
            <Button variant="secondary">See Tutor</Button>
          </div>
        </div>
        <div className={classes.imagesBlock}>
          <Image
            className={clsx(classes.image, classes.woman)}
            alt="positive woman"
            src="/positive-woman.png"
            width={260}
            height={260}
            quality={100}
          />
          <Image
            className={clsx(classes.image, classes.man)}
            alt="focused man"
            src="/focused-man.png"
            width={305}
            height={244}
            quality={100}
          />
          <Image
            className={clsx(classes.image, classes.chart)}
            alt="chart"
            src="/chart.svg"
            width={89}
            height={89}
          />
          <div className={clsx("p2", classes.flyingText, classes.ft1)}>
            IELTS preparation
          </div>
          <div className={clsx("p2", classes.flyingText, classes.ft2)}>
            Functional English
          </div>
          <div className={clsx("p2", classes.flyingText, classes.ft3)}>
            Business English
          </div>
          <div className={clsx("p2", classes.flyingText, classes.ft4)}>
            Conversational English
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
