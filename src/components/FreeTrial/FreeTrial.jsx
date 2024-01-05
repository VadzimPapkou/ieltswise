"use client";

import classes from "./FreeTrial.module.scss";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import clsx from "clsx";
import Button from "../Button/Button";
import Link from "next/link";
import axiosClient from "../../axiosClient";
import ChooseLessonsModal from "../ChooseLessonsModal";

const FreeTrial = ({}) => {

  const [showChooseLessonModal, setShowChooseLessonModal] = useState(false);

  return (
    <div className={classes.freeTrial}>
      {showChooseLessonModal && <ChooseLessonsModal setShowModal={setShowChooseLessonModal}/>}
      <h2 className={clsx(classes.header)}>
        Book for a FREE 30 min trial session
      </h2>
      <form className={classes.bookTrialForm} onSubmit={handleSubmit}>
        <TextField placeholder="Name" name="name" />
        <TextField placeholder="E-mail" name="email" />
        <Button variant="primary" type="submit">
          Book a Free Chat
        </Button>
      </form>
      <p className={classes.agree}>
        By clicking “Book”, you agree to the processing of{" "}
        <Link href="" className={classes.personalData}>
          Personal data.
        </Link>
      </p>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    setShowChooseLessonModal(true);
  }
};

export default FreeTrial;
