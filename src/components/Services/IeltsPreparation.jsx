import classes from "./IeltsPreparation.module.css";
import clsx from "clsx";
import ArrowOutward from "../../icon-components/ArrowOutward";
import Tab from "./Tab";

const IeltsPreparation = () => {
  return (
    <Tab title="Get closer to your target IELTS band score">
      <ul className={classes.ieltsList}>
        <li className="p1">Prepare for Academic or General Training IELTS</li>
        <li className="p1">
          Improve test-related skills for all sections of the test: listening,
          reading, writing and speaking. Learn useful grammar and vocabulary.
        </li>
        <li className="p1">
          Gain test awareness: Learn about the test format and different
          question types.
        </li>
        <li className="p1">
          Develop effective test strategies, tips, and techniques to help your
          perform better.
        </li>
        <li className="p1">
          Choose the best IELTS course for you. Decide your schedule, teacher,
          type of classes, and language focus.
        </li>
      </ul>
      <p className={clsx("p1", classes.ieltsDescription)}>
        Get IELTS ready and be calm and confident on your test day.
      </p>
      <button className={classes.ieltsTest}>
        <div>
          <h4 className={clsx("h4-like", classes.ieltsTestTitle)}>
            Academic test
          </h4>
          <p className={clsx("p1", classes.ieltsTestDescription)}>
            This test is usually for people who are wanting to study in an
            english-speaking environment, or for professional registration
            (Nurse, Doctor, Teacher or Veterinarian).
          </p>
        </div>
        <div className={classes.ieltsTestButton}>
          <ArrowOutward color="#fff" />
        </div>
      </button>
      <button className={classes.ieltsTest}>
        <div>
          <h4 className={clsx("h4-like", classes.ieltsTestTitle)}>
            General test
          </h4>
          <p className={clsx("p1", classes.ieltsTestDescription)}>
            This is for people applying to study below degree level, and
            measures English proficiency in an everyday context. The IELTS
            General Training is also required for migration to Australia,
            Canada, New Zealand and the UK.
          </p>
        </div>
        <div className={classes.ieltsTestButton}>
          <ArrowOutward color="#fff" />
        </div>
      </button>
    </Tab>
  );
};

export default IeltsPreparation;
