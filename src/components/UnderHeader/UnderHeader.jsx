"use client";

import React, { useState } from "react";
import classes from "./UnderHeader.module.scss";
import Button from "../Button/Button";
import ChooseLessonsModal from "../ChooseLessonsModal";
import { processPayment } from "../../processPayment";
import Image from "next/image";
import { useWindowSize } from "../../hooks/useWindowSize";

const UnderHeader = () => {
  const [showLessonsModal, setShowLessonsModal] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className={classes.wrapper}>
      {showLessonsModal && (
        <ChooseLessonsModal setShow={setShowLessonsModal} onSubmitModal={handleSubmitLessons} withEmail={true} />
      )}
      <div className={classes.underHeader}>
        <div className={classes.textBlock}>
          <p className={classes.ieltswiseEducation}>IELTSWISE Education</p>
          <h1 className={classes.title}>
            Online English Tutor to Fit <span className={classes.accent}>YOUR Schedule.</span>
          </h1>
          <p className={classes.info}>
            The lessons take place online and are personalised to fit your needs. Lessons can be arranged to fit into
            your daily schedule: before work; after work; evenings and weekend slots are all available.
          </p>
          <table className={classes.lessonInfo}>
            <tbody>
              <tr>
                <td className={classes.price}>$15</td>
                <td className={classes.duration}>1 hour</td>
                <td className={classes.platform}>Google meet</td>
              </tr>
              <tr>
                <th>Price</th>
                <th>Duration</th>
                <th>Platform</th>
              </tr>
            </tbody>
          </table>
          <Button className={classes.chooseLessonButton} variant="primary" onClick={handleChooseLessonsClick}>
            Choose a Lesson
          </Button>
        </div>
        <div className={classes.imagesBlock}>
          <div className={classes.positiveWoman}>
            <Image className={classes.positiveWomanImage} src="/positive-woman.jpg" width={384} height={520} alt="" />
            <div className={classes.discount}>
              <div className={classes.discountText}>
                <p className={classes.discountTitle}>BOOK EVERY FIFTH SESSIONS</p>
                <p className={classes.discountAmount}>
                  and get a <span className={classes.discountValue}>25% DISCOUNT.</span>
                </p>
              </div>
              <Image className={classes.percent} src="/percent.svg" width={127} height={143} alt="" />
            </div>
          </div>
          <div className={classes.focusedMan}>
            <Image
              className={classes.focusedManImage}
              src="/focused-man.jpg"
              width={291}
              height={520}
              alt=""
              quality={70}
            />
          </div>
        </div>
        <Image
          src="/positive-woman-2.png"
          width={358}
          height={233}
          alt="positive woman"
          className={classes.positiveWomanMobile}
          quality={70}
        />
        <Button className={classes.chooseLessonButtonMobile} variant="primary" onClick={handleChooseLessonsClick}>
          Choose a Lesson
        </Button>
      </div>
    </div>
  );

  function handleChooseLessonsClick() {
    setShowLessonsModal(!showLessonsModal);
  }

  async function handleSubmitLessons({ email, selectedTime, sessionType }) {
    return processPayment(email, selectedTime, sessionType);
  }
};

export default UnderHeader;
