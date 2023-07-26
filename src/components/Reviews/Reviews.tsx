import React from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

type ReviewsProps = {};

const Reviews: React.FC = ({}: ReviewsProps) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={clsx("h2-like", classes.title)}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand
        it and understand the melody” - <b>Maya Angelou</b>
      </p>
      <div className={classes.reviews}>
        <div className={classes.review}>
          <p className={clsx("p2")}>
            “I worked with Neil on my English pronunciation and to reach a
            higher level of English. I recommend Neil, he is a very good teacher
            and I learned a lot! If you are looking for a teacher who
            understands your needs and can find the right way to teach you
            English…you have found it!”
          </p>
          <h3 className={clsx(classes.reviewHeader, "h5")}>
            Federico: December 14, 2022
          </h3>
        </div>
        <div className={classes.review}>
          <p className={clsx("p2")}>
            “I worked with Neil on my English pronunciation and to reach a
            higher level of English. I recommend Neil, he is a very good teacher
            and I learned a lot! If you are looking for a teacher who
            understands your needs and can find the right way to teach you
            English…you have found it!”
          </p>
          <h3 className={clsx(classes.reviewHeader, "h5")}>
            Christiane: October 19, 2022
          </h3>
        </div>
        <div className={classes.review}>
          <p className={clsx("p2")}>
            “I worked with Neil on my English pronunciation and to reach a
            higher level of English. I recommend Neil, he is a very good teacher
            and I learned a lot! If you are looking for a teacher who
            understands your needs and can find the right way to teach you
            English…you have found it!”
          </p>
          <h3 className={clsx(classes.reviewHeader, "h5")}>
            Federico: December 14, 2022
          </h3>
        </div>
        <textarea
          className={clsx("p2", classes.reviewTextArea)}
          placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
        />
      </div>
      <Button variant="primary" className={classes.showAllButton}>
        Show all Reviews
      </Button>
    </div>
  );
};

export default Reviews;
