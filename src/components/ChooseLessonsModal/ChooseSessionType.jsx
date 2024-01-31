import clsx from "clsx";
import classes from "./ChooseSessionType.module.scss";
import Button from "../Button/Button";
import Radio from "./Radio";
import { useContext, useState } from "react";
import { ModalContext } from "./ChooseLessonsModal";
import Modal from "../Modal";

const ChooseSessionType = ({ close }) => {

  const [sessionType, setSessionType] = useState("");

  function handleSessionType (e) {
    setSessionType(e.target.value);
  }

  const { setStep } = useContext(ModalContext);

  return (
    <Modal className={classes.modal} onCloseClick={close}>
      <p className={clsx("h3-like", classes.title)}>
        What type of session are you interested in?
      </p>
      <p className={classes.description}>
        I'm pleased to meet you! Please select one lesson which you would <br/> like to improve.
      </p>
      <div className={classes.sessions}>
        <Radio className={classes.session} label="IELTS Academic test" name="session" onChange={handleSessionType} />
        <Radio className={classes.session} label="IELTS General test" name="session" onChange={handleSessionType} />
        <Radio className={classes.session} label="Conversational English" name="session" onChange={handleSessionType} />
        <Radio className={classes.session} label="Functional English" name="session" onChange={handleSessionType} />
        <Radio className={classes.session} label="Business English" name="session" onChange={handleSessionType} />
        <Radio className={classes.session} label="Improve English" name="session" onChange={handleSessionType} />
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
