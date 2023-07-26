import React from "react";
import classes from "./SeveralLessons.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import CheckMark from "../../icon-components/CheckMark";

type SeveralLessonsProps = {};

const SeveralLessons: React.FC = ({}: SeveralLessonsProps) => {
  return (
    <div className={classes.severalLessons}>
      <h2 className={clsx(classes.title, "h3-like")}>
        Buy several lessons at once?
      </h2>
      <p className={classes.description}>
        Make your plan, book several lessons at once and get a discount from me.
      </p>
      <p className={classes.cancel}>
        <CheckMark />
        Cancel anytime
      </p>
      <Button variant="secondary" className={classes.buyButton}>
        Buy Lessons
      </Button>
    </div>
  );
};

export default SeveralLessons;
