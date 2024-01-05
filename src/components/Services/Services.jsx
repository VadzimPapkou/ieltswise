"use client";

import React, { useState } from "react";
import classes from "./Services.module.scss";
import clsx from "clsx";
import Image from "next/image";
import IeltsPreparation from "./IeltsPreparation";
import FunctionalEnglish from "./FunctionalEnglish";
import ConversationalEnglish from "./ConversationalEnglish";
import BusinessEnglish from "./BusinessEnglish";
import ImproveEnglish from "./ImproveEnglish";

const tabs = [
  {
    title: "IELTS preparation",
    iconSrc: "/service-icon-1.svg",
    component: IeltsPreparation,
    class: classes.ieltsPreparation
  },
  {
    title: "Functional English",
    iconSrc: "/service-icon-4.svg",
    component: FunctionalEnglish,
    class: classes.functionalEnglish
  },
  {
    title: "Conversational English",
    iconSrc: "/service-icon-5.svg",
    component: ConversationalEnglish,
    class: classes.conversationalEnglish
  },
  {
    title: "Business English",
    iconSrc: "/service-icon-3.svg",
    component: BusinessEnglish,
    class: classes.businessEnglish
  },
  {
    title: "Improve English",
    iconSrc: "/service-icon-6.svg",
    component: ImproveEnglish,
    class: classes.improveEnglish
  },
];

const Services = ({}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const ActiveComponent = activeTab.component;

  return (
    <div className={classes.services}>
      <h2 className={clsx(classes.title, "h2-like")}>Services</h2>
      <p className={clsx(classes.description, "p1")}>
        Choose a training program that suits your goals, or create your own
        individual plan.
      </p>
      <div className={classes.tabSwitchers}>
        {tabs.map((tab) => (
          <button
            className={clsx({
              [classes.tabSwitch]: true,
              [tab.class]: true,
              [classes.active]: tab.title === activeTab.title
            })}
            key={tab.title}
            onClick={handleTabClick(tab)}
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
            <span className={clsx(classes.tabText)}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <ActiveComponent />
    </div>
  );

  function handleTabClick(tab) {
    return function () {
      setActiveTab(tab);
    };
  }
};

export default Services;
