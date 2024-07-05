"use client";

import React, { useState } from "react";
import classes from "./NeilHeader.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../../components/Button/Button";
import ChooseLessonsModal from "../../../../components/ChooseLessonsModal";
import { processPayment } from "../../../../processPayment";

const NeilHeader = ({}) => {
  const [showLessonsModal, setShowLessonsModal] = useState(false);

  return (
    <div className={classes.header}>
      <ChooseLessonsModal
        withEmail={true}
        show={showLessonsModal}
        setShow={setShowLessonsModal}
        onSubmitModal={handleSubmitLessons}
      />
      <img className={classes.neilPhoto} src="/neil-big.png" alt="neil wood" />
      <div className={classes.headerText}>
        <h1 className="h3-like">
          <b>Neil Wood</b>
          <Image className={classes.uk} alt={"United Kingdom"} src={"/uk.svg"} width={20} height={15} />
        </h1>
        <p className={classes.tutorWho}>
          Highly Qualified Exam (IELTS; TOEFL; TOEIC) English Teacher with&nbsp;
          <b>over 18 years’ experience.</b>
        </p>
      </div>
      <div className={classes.linksContainer}>
        <div className={classes.links}>
          <Link href="mailto:aid.ieltswise@gmail.com" className={clsx(classes.textLink, "p1")}>
            <Image alt="google" src="/google.svg" width={32} height={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ieltswise-education-944975272"
            className={clsx(classes.textLink, "p1")}
          >
            <Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61554267389898" className={clsx(classes.textLink, "p1")}>
            <Image alt="facebook" src="/facebook.svg" width={32} height={32} />
          </Link>
        </div>
        <Button variant="primary" onClick={() => setShowLessonsModal(true)}>
          View Sessions
        </Button>
      </div>
    </div>
  );

  function handleSubmitLessons({ email, selectedTime, selectedType }) {
    processPayment(email, selectedTime, selectedType);
  }
};

export default NeilHeader;
