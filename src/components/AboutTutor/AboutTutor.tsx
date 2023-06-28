import React from "react";
import classes from "./AboutTutor.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "../Button/Button";

type AboutTutorProps = {};

const AboutTutor: React.FC = ({}: AboutTutorProps) => {
  return (
    <div className={classes.about}>
      <h2 className={clsx(classes.header, "h2-like")}>About tutor</h2>
      <div className={classes.content}>
        <div className={classes.tutorCard}>
          <Image
            className={classes.tutorPhoto}
            alt="tutor photo"
            src="/neil.png"
            width="380"
            height="458"
          />
          <p className={clsx(classes.experience, "p1")}>Experience: 18 years</p>
          <div className={classes.who}>
            <div className={classes.nameAndCountry}>
              <h3 className={"h3-like"}>Neil Wood</h3>
              <Image
                className={classes.countryFlag}
                alt="UK flag"
                src="/uk.svg"
                width={20}
                height={15}
              />
            </div>
            <p className={classes.job}>English Tutor</p>
          </div>
        </div>
        <div className={classes.aboutText}>
          <h4 className={"h5-like"}>About me</h4>
          <p
            className={clsx(
              classes.firstAboutParagraph,
              classes.aboutParagraph,
              "p1"
            )}
          >
            I have been an outstanding teacher for the last 18 years in English
            Secondary schools. I have taught exam students for most of this time
            ranging from GCSEs and A level right through to University
            Examination preparation. I was also an Examination Consultant for
            AQA English Exam Board for over 5 years so have a knowledge of what
            is needed to be successful at examinations.
          </p>
          <p className={clsx(classes.aboutParagraph, "p1")}>
            My understanding of IELTS and TOEIC has been furthered through
            attending courses for both exams as well as teaching exam
            preparation, as well as the PTE exam.
          </p>
          <p className={clsx(classes.aboutParagraph, "p1")}>
            I am really enthusiastic and want my students to succeed at
            everything that they do.
          </p>
          <h4 className={clsx(classes.interestsHeader, "h5-like")}>
            Interests:
          </h4>
          <div className={classes.interests}>
            <p className={classes.interest}>Nature</p>
            <p className={classes.interest}>Mountains</p>
            <p className={classes.interest}>Scuba diving</p>
            <p className={classes.interest}>Wild water swimming</p>
            <p className={classes.interest}>Travel</p>
            <p className={classes.interest}>Books</p>
          </div>
          <Button className={classes.readAll} variant="large">
            Read all bio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutTutor;
