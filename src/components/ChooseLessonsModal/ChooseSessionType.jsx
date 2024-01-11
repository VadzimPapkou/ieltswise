import clsx from "clsx";
import classes from "./ChooseSessionType.module.scss";
import Button from "../Button/Button";
import Radio from "./Radio";
import { useContext, useState } from "react";
import { ModalContext } from "./ChooseLessonsModal";

const ChooseSessionType = () => {

  const [sessionType, setSessionType] = useState("");
  function handleSessionType(e) {
    setSessionType(e.target.value);
  }

  const {setStep} = useContext(ModalContext);

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
        <Radio label="IELTS Academic test" name="session" onChange={handleSessionType} />
        <Radio label="IELTS General test" name="session" onChange={handleSessionType} />
        <Radio label="Conversational English" name="session" onChange={handleSessionType} />
        <Radio label="Functional English" name="session" onChange={handleSessionType} />
        <Radio label="Business English" name="session" onChange={handleSessionType} />
        <Radio label="Improve English" name="session" onChange={handleSessionType} />
      </div>
      <Button
        className={classes.nextButton}
        variant="link"
        onClick={handleNextClick}
        disabled={sessionType === ""}
      >
        Next
      </Button>
    </>
  );

  function handleNextClick () {
    if(sessionType === "") return;
    setStep("date");
  }
};

export default ChooseSessionType;
