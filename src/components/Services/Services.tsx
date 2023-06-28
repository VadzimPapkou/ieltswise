import React from "react";
import classes from "./Services.module.scss";
import clsx from "clsx";
import Image from "next/image";

type ServicesProps = {};

const Services: React.FC = ({}: ServicesProps) => {
  // const tabs = [
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  //   { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
  // ];

  return (
    <div className={classes.services}>
      <h2 className={clsx(classes.header, "h2-like")}>Services</h2>
      <p className={clsx(classes.description, "p1")}>
        The first step to improving your English. My teaching approach is one
        which will empower you to learn and use English with confidence. Your
        lessons will be personalised to meet your needs.
      </p>
      <div className={classes.tabs}>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration1)}
          >
            <Image
              alt="service icon"
              src="/service-icon-1.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>IELTS preparation</span>
        </button>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration2)}
          >
            <Image
              alt="service icon"
              src="/service-icon-2.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>Exam preparation</span>
        </button>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration3)}
          >
            <Image
              alt="service icon"
              src="/service-icon-3.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>Business English</span>
        </button>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration4)}
          >
            <Image
              alt="service icon"
              src="/service-icon-4.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>Functional English</span>
        </button>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration5)}
          >
            <Image
              alt="service icon"
              src="/service-icon-5.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>Conversational English</span>
        </button>
        <button className={classes.tab}>
          <div
            className={clsx(classes.iconDecoration, classes.iconDecoration6)}
          >
            <Image
              alt="service icon"
              src="/service-icon-6.svg"
              width={24}
              height={24}
            />
          </div>
          <span className={classes.tabText}>Improve English</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
