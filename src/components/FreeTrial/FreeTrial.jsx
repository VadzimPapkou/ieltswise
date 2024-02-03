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

const FreeTrial = ({}) => {

  const [showChooseLessonModal, setShowChooseLessonModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookResponse, setBookResponse] = useState();

  const disabled = !email || !email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

  return (
    <div className={classes.freeTrial}>
      {showChooseLessonModal &&
        <ChooseLessonsModal setShowModal={setShowChooseLessonModal} onSubmitModal={onSubmitModal} />}
      {showStatusModal &&
        <BookStatusModal setShow={setShowStatusModal} response={bookResponse} />
      }
      <h2 className={clsx(classes.header)}>
        Book for a FREE 30 min trial session
      </h2>
      <form className={classes.bookTrialForm}>
        <TextField placeholder="Name" name="name"
                   value={name} onChange={e => setName(e.target.value)} />
        <TextField placeholder="E-mail" name="email" type="email"
                   value={email} onChange={e => setEmail(e.target.value)} />
        <Button variant="primary" type="submit" onClick={handleSubmit}>
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

  function handleSubmit (e) {
    e.preventDefault();
    if (disabled) return;

    setShowChooseLessonModal(true);
  }

  async function onSubmitModal ({ selectedTime, sessionType }) {
    const startDate = moment(selectedTime);
    let endDate = moment(startDate).add(59, "minutes");

    try {
      const response = await axiosClient.post("/student/bookTrialSession", {
        requestedService: sessionType,
        tutorEmail: "test.tutor1.ieltswise67@gmail.com",
        studentEmail: email,
        studentName: name,
        startDate: startDate.toISOString(true),
        endDate: endDate.toISOString(true)
      });
      setBookResponse(response);
      setShowStatusModal(true);
    } catch (e) {
      setBookResponse(e.response);
      setShowStatusModal(true);
    }
  }
};

export default FreeTrial;
