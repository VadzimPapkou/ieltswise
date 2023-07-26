import React from "react";
import classes from "./AboutTutor.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "../Button/Button";

type AboutTutorProps = {};

const AboutTutor: React.FC = ({}: AboutTutorProps) => {
  return (
    <div className={classes.about}>
      <h2 className={clsx(classes.title, "h2-like")}>About tutor</h2>
      <div className={classes.content}>
        <Image
          className={classes.tutorPhoto}
          alt="tutor photo"
          src="/neil.png"
          width="184"
          height="184"
        />
        <div className={classes.aboutText}>
          <h4 className="h3-like">
            <b>Neil Wood</b>
            <Image
              className={classes.uk}
              alt={"United Kingdom"}
              src={"/uk.svg"}
              width={20}
              height={15}
            />
          </h4>
          <p className={classes.tutorWho}>
            Highly Qualified Exam (IELTS; TOEFL; TOEIC) English Teacher
            with&nbsp;
            <b>over 18 years’ experience.</b>
          </p>
          <h4 className={clsx("h5-like", classes.tutorDescriptionTitle)}>
            <b>Why choose me?</b>
          </h4>
          <p className={classes.tutorDescription}>
            Taking English classes with me will ensure you have the same teacher
            for every lesson, this enables me to get to know your needs better
            and really focus on your English skills and specific needs. I’m
            really friendly, check my student feedback, and I will make you feel
            comfortable whilst learning. You might even have some fun!
          </p>
          <h4 className={clsx(classes.interestsHeader, "h5-like")}>
            Interests:
          </h4>
          <div className={classes.interests}>
            <p className={classes.interest}>Books</p>
            <p className={classes.interest}>Nature</p>
            <p className={classes.interest}>Mountains</p>
            <p className={classes.interest}>Scuba diving</p>
            <p className={classes.interest}>Wild water swimming</p>
            <p className={classes.interest}>Travel</p>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.readAll} variant="primary">
              Read all bio
            </Button>
            <Button variant="text">Show certifications</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTutor;
