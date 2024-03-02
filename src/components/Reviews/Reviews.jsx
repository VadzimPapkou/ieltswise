"use client";

import React, { useRef } from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import axiosClient from "../../axiosClient";

export const Reviews = observer(({ children }) => {
  const storeRef = useRef(new ReviewsStore());
  const store = storeRef.current;

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <h2 className={clsx("h2-like", classes.title)}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand
        it and understand the melody” - <b>Maya Angelou</b>
      </p>
      <div className={classes.reviews}>
        <div className={classes.newReview}>
          <TextField
            placeholder="email@example.com"
            value={store.studentEmail.value}
            onChange={(e) => store.setStudentEmail(e.target.value)}
            validityState={store.studentEmail.error ? "invalid" : "default"}
            validationMessage={store.studentEmail.error}
          />
          <textarea
            className={classes.newReviewValue}
            placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
          />
        </div>
        {children}
      </div>
      <Button
        variant="primary"
        className={classes.showAllButton}
        onSubmit={handleSubmit}
      >
        Submit review
      </Button>
    </form>
  );

  async function handleSubmit(e) {
    axiosClient.post("/comment", {});
  }
});

class ReviewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  studentEmail = {
    value: "",
    error: null,
  };

  setStudentEmail(value) {
    this.studentEmail.value = value;
  }
}
