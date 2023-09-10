import React, { useState } from "react";
import classes from "./ChooseLessonsModal.module.scss";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import ChooseSessionType from "./ChooseSessionType";
import ChooseDate from "./ChooseDate";
import clsx from "clsx";

const ChooseLessonsModal = ({ setShowModal }) => {
  const [step, setStep] = useState("sessionType");

  const stepToComponent = {
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
      <Modal className={className} onCloseClick={closeModal}>
        <CurrentStep setStep={setStep} setShowModal={setShowModal} />
      </Modal>
    </ModalFade>
  );

  function closeModal() {
    setShowModal(false);
  }
};

export default ChooseLessonsModal;
