import clsx from "clsx";
import classes from "./ChooseSessionType.module.scss";
import Button from "../Button/Button";

const ChooseSessionType = ({ setStep }) => {
  return (
    <>
      <p className={clsx("h4-like", classes.header)}>
        What type of session are you interested in?
      </p>
      <p className={classes.description}>
        I'm pleased to meet you! Please select one lesson for which you would
        like to receive consultation.
      </p>
      <div className={classes.sessions}>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>IELTS Academic test</p>
        </label>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>IELTS General test</p>
        </label>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>Conversational English</p>
        </label>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>Functional English</p>
        </label>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>Business English</p>
        </label>
        <label className={classes.session}>
          <input type="radio" name="sessionType" value="" />
          <p>Improve English </p>
        </label>
      </div>
      <Button
        className={classes.nextButton}
        variant="link"
        onClick={handleNextClick}
      >
        Next
      </Button>
    </>
  );

  function handleNextClick() {
    setStep("date");
  }
};

export default ChooseSessionType;
