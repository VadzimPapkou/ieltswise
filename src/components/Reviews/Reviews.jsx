"use client";

import React, { useEffect, useRef, useState, useTransition } from "react";
import classes from "./Reviews.module.scss";
import Button from "../Button/Button";
import { observer } from "mobx-react-lite";
import axiosClient from "../../axiosClient";
import { useRouter } from "next/navigation";
import { NewReviewModal } from "./NewReviewModal";
import ArrowRight from "../../icon-components/ArrowRight";
import anime from "animejs";
import Arrow2 from "../../icon-components/Arrow2/Arrow2";
import Arrow3 from "../../icon-components/Arrow3";

export const Reviews = observer(({ children }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showNewReviewModal, setShowNewReviewModal] = useState(false);
  const reviewsRef = useRef(null);

  useEffect(handleSwipe);

  return (
    <div className={classes.wrapper}>
      {showNewReviewModal && <NewReviewModal onSubmit={submitReview} close={() => setShowNewReviewModal(false)} />}
      <h2 className={classes.title}>Reviews</h2>
      <p className={classes.titleDescription}>
        “I admire people who dare to take the language, English, and understand it and understand the melody” -{" "}
        <b>Maya Angelou</b>
      </p>
      <div className={classes.controls}>
        <button onClick={handleControlLeftClick}>
          <Arrow3 className={classes.arrowLeft} color="#fff" />
        </button>
        <button onClick={handleControlRightClick}>
          <Arrow3 className={classes.arrowRight} color="#fff" />
        </button>
      </div>
      <div className={classes.reviews} ref={reviewsRef}>
        {children}
      </div>
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

  function handleSwipe() {
    if (isMobile()) return;
    const $reviews = reviewsRef.current;

    let clientX1 = null;

    $reviews.addEventListener("mousedown", handleMouseDown);
    $reviews.addEventListener("mouseup", handleMouseUp);

    function handleMouseDown(e) {
      $reviews.addEventListener("mousemove", handleMouseMove);
      clientX1 = e.clientX;
    }

    function handleMouseUp() {
      $reviews.removeEventListener("mousemove", handleMouseMove);
    }

    function handleMouseMove(e) {
      $reviews.scrollLeft += clientX1 - e.clientX;
      clientX1 = e.clientX;
    }

    return () => {
      $reviews.removeEventListener("mousedown", handleMouseDown);
      $reviews.removeEventListener("mouseup", handleMouseUp);
    };
  }

  function handleControlLeftClick() {
    const reviews = reviewsRef.current;
    const end = reviews.scrollLeft - 416 - 16;
    anime({
      targets: [reviewsRef.current],
      scrollLeft: end,
      easing: "easeOutCubic",
    });
  }

  function handleControlRightClick() {
    const reviews = reviewsRef.current;
    const end = reviews.scrollLeft + 416 + 16;
    anime({
      targets: [reviewsRef.current],
      scrollLeft: end,
      easing: "easeOutCubic",
    });
  }
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );
}
