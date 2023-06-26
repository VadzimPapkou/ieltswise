import React from "react";
import classes from "./UnderHeader.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import Image from "next/image";

const UnderHeader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.underHeader}>
        <div className={classes.bookSession}>
          <h1 className={clsx(classes.h1, "h2-like")}>
            Online English Tutoring from the IELTS Preparation to Conversational
            English
          </h1>
          <p className={clsx("p1", classes.chooseCategory)}>
            Choose your category
          </p>
          <Button variant="large" className={classes.chooseSessionButton}>
            Choose a session
          </Button>
        </div>
        <div className={classes.reviewBlock}>
          <Image
            className={classes.chart}
            alt="chart"
            src="/chart.svg"
            width={84}
            height={98}
          />
          <Image
            className={classes.positiveWoman}
            alt="positive woman"
            src="/positive-woman.png"
            width={280}
            height={170}
          />
          <Image
            className={classes.focusedMan}
            alt="focused man"
            src="/focused-man.png"
            width={280}
            height={178}
          />
          <div className={classes.review}>
            <p className={clsx(classes.reviewText, "p2")}>
              <i>
                “You can talk with Neil about anything and nothing. He has vast
                amounts of knowledge, great sense of humour and can make you
                feel at ease quite easily. But more importantly, he makes you
                use your…
              </i>
              &nbsp;
              <Button variant="text">read all</Button>
            </p>
            <h2 className={clsx(classes.reviewAuthor, "p2")}>
              <b>Katarzyna: November 3, 2022</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
