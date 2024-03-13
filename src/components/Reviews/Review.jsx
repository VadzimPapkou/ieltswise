"use client";

import classes from "./Reviews.module.scss";
import React, { Fragment, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import moment from "moment";

export function Review({ children, review }) {
  const ref = useRef();

  useEffect(() => {
    const height = ref.current.querySelector("." + classes.reviewValue).getBoundingClientRect().height;
    setIsOverflowing(height >= 140);
  }, [review.value]);

  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showFullReview, setShowFullReview] = useState(false);

  return (
    <Fragment>
      <div
        onClick={handleClick}
        ref={ref}
        className={clsx({
          [classes.review]: true,
          [classes.overflowing]: isOverflowing,
        })}
      >
        {children}
      </div>
      {showFullReview && <FullReviewModal review={review} close={() => setShowFullReview(false)} />}
    </Fragment>
  );

  function handleClick() {
    if (!isOverflowing) return;
    setShowFullReview(true);
  }
}

function FullReviewModal({ review, close }) {
  return (
    <ModalFade onClickOutside={close}>
      <Modal onCloseClick={close}>
        <div className={classes.fullReview}>
          <div className={classes.reviewHeader}>
            <div className={classes.reviewAvatar}>{review.name[0].toUpperCase()}</div>
            <div className={classes.reviewText}>
              <h3 className={classes.reviewName}>{review.name}</h3>
              <p className={classes.reviewCreated}>{moment(review.created).format("MMMM DD, YYYY")}</p>
            </div>
          </div>
          <p className={classes.reviewValue}>“{review.value}”</p>
        </div>
      </Modal>
    </ModalFade>
  );
}
