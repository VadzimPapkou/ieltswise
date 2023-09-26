import React from "react";
import classes from "./NeilInfo.module.scss";
import clsx from "clsx";

const NeilInfo = ({}) => {
  return <div className={classes.neilInfo}>
    <div className={classes.column}>
      <div className={classes.aboutMe}>
        <h2 className="h2-like">About me</h2>
        <p className="p1">
          I have been an outstanding teacher for the last 18 years in English Secondary schools. I have taught exam
          students for most of this time ranging from GCSEs and A level right through to University Examination
          preparation. I was also an Examination Consultant for AQA English Exam Board for over 5 years so have a
          knowledge of what is needed to be successful at examinations.
        </p>
        <p className="p1">
          My understanding of IELTS and TOEIC has been furthered through attending courses for both exams as well as
          teaching exam preparation, as well as the PTE exam.
        </p>
        <p className="p1">
          I am really enthusiastic and want my students to succeed at everything that they do.
        </p>
      </div>
      <div className={classes.freeChat}>
        <h2 className="h5-like">Arrange a free chat</h2>
        <p className="p1">
          I offer a free 30-minute discovery session to all new students; this helps you decide if I am a right fit for
          you and helps me analyse your current level of English and what we need to concentrate
        </p>
      </div>
    </div>
    <div className={classes.column}>
      <div className={classes.interestsContainer}>
        <h2 className="h5-like">
          Interests:
        </h2>
        <div className={classes.interests}>
          <p className={classes.interest}>Books</p>
          <p className={classes.interest}>Nature</p>
          <p className={classes.interest}>Mountains</p>
          <p className={classes.interest}>Scuba diving</p>
          <p className={classes.interest}>Wild water swimming</p>
          <p className={classes.interest}>Travel</p>
        </div>
      </div>
      <div className={classes.whyChooseMe}>
        <h2 className="h5-like">Why choose me?</h2>
        <p className="p1">Taking English classes with me will ensure you have the same teacher for every lesson, this
          enables me to get to know your needs better and really focus on your English skills and specific needs. I’m
          really friendly, check my student feedback, and I will make you feel comfortable whilst learning. You might even
          have some fun!</p>
        <p className="p1">I’m a native English speaker and will ensure I’m focussing on your pronunciation and accent. I
          will adapt to your learning and language needs and can be very flexible about class sizes – if you wish to learn
          with your partner or family, there’s always an option.</p>
      </div>
    </div>
  </div>;
};

export default NeilInfo;
