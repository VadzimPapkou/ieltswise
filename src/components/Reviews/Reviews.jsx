"use client";

import React, { useRef, useTransition } from "react";
import classes from "./Reviews.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import axiosClient from "../../axiosClient";
import { useRouter } from "next/navigation";
import ModalFade from "../ModalFade";
import Modal from "../Modal";

const ErrorModal = ({ close }) => (
  <ModalFade onClickOutside={close}>
    <Modal className={classes.errorModal} onCloseClick={close}>
      User didn't purchase any lessons
    </Modal>
  </ModalFade>
);

export const Reviews = observer(({ children }) => {
  const storeRef = useRef(new ReviewsStore());
  const store = storeRef.current;

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className={classes.wrapper}
      onSubmit={store.handleSubmit(router, startTransition)}
    >
      {store.showErrorModal && (
        <ErrorModal close={() => (store.showErrorModal = false)} />
      )}
      <h2 className={clsx("h2-like", classes.title)}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand
        it and understand the melody” - <b>Maya Angelou</b>
      </p>
      <div className={classes.reviews}>
        <div className={classes.newReview}>
          <TextField
            className={classes.newReviewEmail}
            type="email"
            placeholder="email@example.com"
            value={store.newReviewEmail}
            onChange={(e) => (store.newReviewEmail = e.target.value)}
          />
          <textarea
            className={classes.newReviewValue}
            placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
            value={store.newReviewValue}
            onChange={(e) => (store.newReviewValue = e.target.value)}
          />
        </div>
        {children}
      </div>
      <Button
        variant="primary"
        loading={store.loading}
        className={classes.showAllButton}
      >
        Submit review
      </Button>
    </form>
  );
});

class ReviewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  newReviewEmail = "";
  newReviewValue = "";

  loading = false;
  showErrorModal = false;

  handleSubmit = (router, startTransition) => async (e) => {
    e.preventDefault();
    try {
      this.loading = true;
      await axiosClient.post("/comments", {
        email: this.newReviewEmail,
        value: this.newReviewValue,
      });

      startTransition(() => {
        router.refresh();
      });
    } catch (e) {
      if (e.response.status === 400) {
        this.showErrorModal = true;
      } else {
        console.error(e);
      }
    } finally {
      this.loading = false;
    }
  };
}
