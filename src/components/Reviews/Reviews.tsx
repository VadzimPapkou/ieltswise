import React from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import VerticalMarquee from "../VerticalMarquee";

type ReviewsProps = {};

const Reviews: React.FC = ({}: ReviewsProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.headerColumn)}>
        <h2 className={clsx(classes.header, "h2-like")}>Reviews</h2>
        <p className={clsx(classes.headerDescription, "p1")}>
          Here's what students say about my tutoring.
        </p>
        <Button className={classes.writeReviewButton} variant="card">
          Write a review
        </Button>
      </div>
      <div className={clsx(classes.reviewsContainer)}>
        <div className={classes.reviews}>
          <div className={clsx(classes.column, classes.reviewColumn)}>
            <VerticalMarquee direction="to-left">
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
            </VerticalMarquee>
          </div>
          <div className={clsx(classes.column, classes.reviewColumn)}>
            <VerticalMarquee direction="to-right">
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
              <div className={classes.review}>
                <p className={clsx(classes.reviewText, "p2")}>
                  “I worked with Neil on my English pronunciation and to reach
                  a higher level of English. I recommend Neil, he is a very good
                  teacher and I learned a lot! If you are looking for a teacher
                  who understands your needs and can find the right way to teach
                  you English…you have found it!”
                </p>
                <h3 className={clsx(classes.reviewHeader, "h5")}>
                  Federico: December 14, 2022
                </h3>
              </div>
            </VerticalMarquee>
          </div>
        </div>
        <Button className={classes.showAllButton} variant="large">
          Show all reviews
        </Button>
      </div>
    </div>
  );
};

export default Reviews;

/*
<div className={classes.review}>
              <p className={clsx(classes.reviewText, "p2")}>
                “I worked with Neil on my English pronunciation and to reach
                a higher level of English. I recommend Neil, he is a very good
                teacher and I learned a lot! If you are looking for a teacher
                who understands your needs and can find the right way to teach
                you English…you have found it!”
              </p>
              <h3 className={clsx(classes.reviewHeader, "h5")}>
                Federico: December 14, 2022
              </h3>
            </div>
 */
