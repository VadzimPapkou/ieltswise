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

const FreeTrial = ({}) => {

  const [showChooseLessonModal, setShowChooseLessonModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const disabled = !email || !email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

  return (
    <div className={classes.freeTrial}>
      {showChooseLessonModal &&
        <ChooseLessonsModal setShowModal={setShowChooseLessonModal} onSubmitModal={onSubmitModal} />}
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
    if(disabled) return;

    setShowChooseLessonModal(true);
  }

  async function onSubmitModal ({ time, day }) {
    time = moment(time, "HH:mm");
    day.set({
      hour: time.hours(),
      minute: time.minutes()
    });
    let endDate = day.add(59, "minutes");
    const response = await axiosClient.post("/student/bookTrialSession", {
      tutorEmail: "test.tutor1.ieltswise67@gmail.com",
      studentEmail: email,
      startDate: day.toISOString(),
      endDate: endDate.toISOString(),
    });
    console.log(response);
  }
};

export default FreeTrial;
