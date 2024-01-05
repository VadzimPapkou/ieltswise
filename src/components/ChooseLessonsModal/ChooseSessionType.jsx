import clsx from "clsx";
import classes from "./ChooseSessionType.module.scss";
import Button from "../Button/Button";
import Radio from "./Radio";

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
        <Radio label="IELTS Academic test" name="session" />
        <Radio label="IELTS General test" name="session" />
        <Radio label="Conversational English" name="session" />
        <Radio label="Functional English" name="session" />
        <Radio label="Business English" name="session" />
        <Radio label="Improve English" name="session" />
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

  function handleNextClick () {
    setStep("date");
  }
};

export default ChooseSessionType;
