"use client";

import classes from "./FreeTrial.module.scss";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import clsx from "clsx";
import Button from "../Button/Button";
import Link from "next/link";
import axiosClient from "../../axiosClient";
import ChooseLessonsModal from "../ChooseLessonsModal";
import moment from "moment";
import BookStatusModal from "../BookStatusModal";
import { useForm } from "react-hook-form";
import { isGmail, tutorGmail } from "../../common";

const FreeTrial = ({}) => {
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const { register, handleSubmit, formState, getValues } = useForm();
  const [bookResponse, setBookResponse] = useState();

  return (
    <div className={classes.freeTrial}>
      <ChooseLessonsModal show={showLessonModal} setShow={setShowLessonModal} onSubmitModal={onSubmitModal} />
      {showStatusModal && <BookStatusModal setShow={setShowStatusModal} response={bookResponse} />}
      <h2 className={clsx(classes.header)}>Book for a FREE 30 min trial session</h2>
      <form className={classes.bookTrialForm} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={() => register("name", { required: { value: true, message: "Please enter your name." } })}
          placeholder="Name"
          className={classes.textField}
          validityState={formState.errors.name ? "invalid" : "default"}
          validationMessage={formState.errors?.name?.message || ""}
        />
        <TextField
          register={() => register("email", { validate: (value) => isGmail(value) || "Please enter a valid gmail." })}
          className={classes.textField}
          placeholder="example@gmail.com"
          type="email"
          validityState={formState.errors.email ? "invalid" : "default"}
          validationMessage={formState.errors?.email?.message || ""}
        />
        <p className={classes.agreeMobile}>
          By clicking “Book”, you agree to the processing of{" "}
          <Link href="" className={classes.personalData}>
            Personal data.
          </Link>
        </p>
        <Button variant="primary" type="submit" className={classes.submitButton}>
          Book a Free Chat
        </Button>
      </form>
      {/*TODO:*/}
      {/* <p className={classes.agree}>
        By clicking “Book”, you agree to the processing of{" "}
        <Link href="" className={classes.personalData}>
          Personal data.
        </Link>
      </p> */}
      <div className={classes.bubble1}></div>
      <div className={classes.bubble2}></div>
      <div className={classes.bubble3}></div>
    </div>
  );

  function onSubmit() {
    setShowLessonModal(true);
  }

  async function onSubmitModal({ selectedTime, sessionType }) {
    const startDate = moment(selectedTime);
    let endDate = moment(startDate).add(59, "minutes");
    const [name, email] = getValues(["name", "email"]);

    try {
      const response = await axiosClient.post("/student/bookTrialSession", {
        requestedService: sessionType,
        tutorEmail: tutorGmail,
        studentName: name,
        studentEmail: email,
        startDate: startDate.toISOString(true),
        endDate: endDate.toISOString(true),
      });
      setBookResponse(response);
      setShowStatusModal(true);
      setShowLessonModal(false);
    } catch (e) {
      setBookResponse(e.response);
      setShowStatusModal(true);
      setShowLessonModal(false);
    }
  }
};

export default FreeTrial;
