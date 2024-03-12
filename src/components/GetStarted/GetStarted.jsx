"use client";
import React, { useState } from "react";
import classes from "./GetStarted.module.scss";
import Button from "../Button/Button";
import ChooseLessonsModal from "../ChooseLessonsModal";
import { processPayment } from "../../processPayment";

const GetStarted = ({}) => {
  const [showLessonsModal, setShowLessonsModal] = useState(false);

  return (
    <div className={classes.getStarted}>
      {showLessonsModal && (
        <ChooseLessonsModal setShow={setShowLessonsModal} onSubmitModal={handleSubmitLessons} withEmail={true} />
      )}
      <h2 className={classes.title}>Let me help you reach your goal!</h2>
      <p className={classes.description}>
        Explore my sessions that will help you succeed and overcome any difficulties you may encounter.
      </p>
      <Button variant="secondary" className={classes.getStartedButton} onClick={onGetStartedClick}>
        Get Started
      </Button>
    </div>
  );

  function onGetStartedClick(e) {
    setShowLessonsModal(true);
  }

  async function handleSubmitLessons({ email, selectedTime, sessionType }) {
    return processPayment(email, selectedTime, sessionType);
  }
};

export default GetStarted;
