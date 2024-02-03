import clsx from "clsx";
import classes from "./ChooseSessionType.module.scss";
import Button from "../Button/Button";
import Radio from "./Radio";
import { useContext, useState } from "react";
import { ModalContext } from "./ChooseLessonsModal";
import Modal from "../Modal";

const ChooseSessionType = ({ close }) => {

  function handleSessionType (e) {
    setSessionType(e.target.value);
  }

  const { setStep, sessionType, setSessionType } = useContext(ModalContext);

  const SessionRadio = ({ label }) => <Radio className={classes.session} label={label} name="session" value={label} checked={label === sessionType}
                                             onChange={handleSessionType} />;

  return (
    <Modal className={classes.modal} onCloseClick={close}>
      <p className={clsx("h3-like", classes.title)}>
        What type of session are you interested in?
      </p>
      <p className={classes.description}>
        I'm pleased to meet you! Please select one lesson which you would <br /> like to improve.
      </p>
      <div className={classes.sessions}>
        <SessionRadio label="IELTS Academic test" />
        <SessionRadio label="IELTS General test" />
        <SessionRadio label="Conversational English" />
        <SessionRadio label="Functional English" />
        <SessionRadio label="Business English" />
        <SessionRadio label="Improve English" />
      </div>
      <Button
        className={classes.nextButton}
        variant="link"
        onClick={handleNextClick}
        disabled={sessionType === ""}
      >
        Next
      </Button>
    </Modal>
  );

  function handleNextClick () {
    if (sessionType === "") return;
    setStep("date");
  }
};

export default ChooseSessionType;
