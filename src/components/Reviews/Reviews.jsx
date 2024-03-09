"use client";

import React, { useState, useTransition } from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import { observer } from "mobx-react-lite";
import axiosClient from "../../axiosClient";
import { useRouter } from "next/navigation";
import { NewReviewModal } from "./NewReviewModal";

export const Reviews = observer(({ children }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showNewReviewModal, setShowNewReviewModal] = useState(false);

  return (
    <div className={classes.wrapper}>
      {showNewReviewModal && <NewReviewModal onSubmit={submitReview} close={() => setShowNewReviewModal(false)} />}
      <h2 className={clsx("h2-like", classes.title)}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand it and understand the melody” -{" "}
        <b>Maya Angelou</b>
      </p>
      <div className={classes.reviews}>{children}</div>
      <div className={classes.buttons}>
        <Button variant="primary" onClick={() => setShowNewReviewModal(true)}>
          Leave Feedback
        </Button>
        {/*<Button variant="text">Read All Reviews</Button>*/}
      </div>
    </div>
  );

  async function submitReview(email, value) {
    await axiosClient.post("/comments", {
      email,
      value,
    });

    startTransition(() => {
      router.refresh();
    });
  }
});
