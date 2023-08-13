import React, { useState } from "react";
import classes from "./ChooseLessonsModal.module.scss";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import ChooseSessionType from "./ChooseSessionType";
import ChooseDate from "./ChooseDate";
import clsx from "clsx";

type ChooseLessonsModalProps = {
  setShowModal: Function;
};

type Step = "sessionType" | "date";
type StepToComponent = { [key: Step]: React.FC };

const ChooseLessonsModal = ({ setShowModal }: ChooseLessonsModalProps) => {
  const [step, setStep] = useState<Step>("sessionType");

  const stepToComponent: StepToComponent = {
    sessionType: ChooseSessionType,
    date: ChooseDate,
  };

  const className = clsx({
    [classes.modal]: true,
    [classes[step]]: true,
  });

  const CurrentStep = stepToComponent[step];

  return (
    <ModalFade onClickOutside={closeModal}>
      <button className={classes.closeModal} onClick={closeModal}>
        &#x2715;
      </button>
      <Modal className={className}>
        <CurrentStep setStep={setStep} setShowModal={setShowModal} />
      </Modal>
    </ModalFade>
  );

  function closeModal() {
    setShowModal(false);
  }
};

export default ChooseLessonsModal;
