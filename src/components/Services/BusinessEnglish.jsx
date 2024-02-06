import classes from "./BusinessEnglish.module.css";
import Tab from "./Tab";
import clsx from "clsx";
import { BookFreeChatButton } from "./BookFreeChatButton";

const BusinessEnglish = () => {
  return (
    <Tab title="In an English for Business lesson you will learn:">
      <ul className={classes.list}>
        <li className="p1">
          How to write a CV and cover letter (if required);
        </li>
        <li className="p1">
          Interview techniques (how to use body language; how to respond to
          questions: and, what types of questions to ask during the interview;
        </li>
        <li className="p1">How to write and deliver a presentation.</li>
      </ul>
      <p className={clsx("p1", classes.description)}>
        The needs of each student will be discussed during the trial lesson so
        that the lessons can be tailored for each individual student.
      </p>
      <BookFreeChatButton className={classes.bookFreeChatButton}/>
    </Tab>
  );
};

export default BusinessEnglish;
