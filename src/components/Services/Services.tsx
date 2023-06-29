"use client";

import React, { useState } from "react";
import classes from "./Services.module.scss";
import clsx from "clsx";
import Image from "next/image";

type ServicesProps = {};

const Services: React.FC = ({}: ServicesProps) => {
  const tabs = [
    { title: "IELTS preparation", iconSrc: "/service-icon-1.svg" },
    { title: "Exam preparation", iconSrc: "/service-icon-2.svg" },
    { title: "Business English", iconSrc: "/service-icon-3.svg" },
    { title: "Functional English", iconSrc: "/service-icon-4.svg" },
    { title: "Conversational English", iconSrc: "/service-icon-5.svg" },
    { title: "Improve English", iconSrc: "/service-icon-6.svg" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <div className={classes.services}>
      <h2 className={clsx(classes.header, "h2-like")}>Services</h2>
      <p className={clsx(classes.description, "p1")}>
        The first step to improving your English. My teaching approach is one
        which will empower you to learn and use English with confidence. Your
        lessons will be personalised to meet your needs.
      </p>
      <div className={classes.tabs}>
        {tabs.map((tab) => (
          <button
            className={clsx({
              [classes.tab]: true,
              [classes.active]: tab.title === activeTab,
            })}
            key={tab.title}
            onClick={handleTabClick(tab.title)}
          >
            <div
              className={clsx(classes.iconDecoration, classes.iconDecoration1)}
            >
              <Image
                alt="service icon"
                src={tab.iconSrc}
                width={24}
                height={24}
              />
            </div>
            <span className={clsx(classes.tabText, "h5-like")}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  function handleTabClick(tabTitle) {
    return function (e) {
      setActiveTab(tabTitle);
    };
  }
};

export default Services;
