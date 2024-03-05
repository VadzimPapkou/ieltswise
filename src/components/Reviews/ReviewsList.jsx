"use server";

import classes from "./Reviews.module.scss";
import moment from "moment/moment";
import React from "react";
import { apiUrl } from "../../axiosClient";

export const ReviewsList = async () => {
  const reviews = await fetchReviews();

  return (
    <>
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
    </>
  );
};

async function fetchReviews() {
  return fetch(apiUrl + "/comments", { cache: "no-cache" })
    .then((response) => response.json())
    .then((reviews) => reviews.reverse());
}
