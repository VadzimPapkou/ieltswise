import React from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import moment from "moment";
import TextField from "../TextField/TextField";

const Reviews = ({ reviews }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={clsx("h2-like", classes.title)}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand
        it and understand the melody” - <b>Maya Angelou</b>
      </p>
      <div className={classes.reviews}>
        <div className={classes.newReview}>
          <TextField placeholder="email@example.com" />
          <textarea
            className={classes.newReviewValue}
            placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
          />
        </div>
        {reviews.map((review) => (
          <div className={classes.review}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewAvatar}>
                {review.name[0].toUpperCase()}
              </div>
              <div className={classes.reviewText}>
                <h3 className={classes.reviewName}>{review.name}</h3>
                <p className={classes.reviewCreated}>
                  {moment(review.created).format("MMMM DD, YYYY")}
                </p>
              </div>
            </div>
            <p className={classes.reviewValue}>“{review.value}”</p>
          </div>
        ))}
      </div>
      <Button variant="primary" className={classes.showAllButton}>
        Show all Reviews
      </Button>
    </div>
  );
};

export default Reviews;
