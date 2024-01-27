import React, { createContext, useState } from "react";
import classes from "./ChooseLessonsModal.module.scss";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import ChooseSessionType from "./ChooseSessionType";
import ChooseDate from "./ChooseDate";
import clsx from "clsx";
import ChooseEmailModal from "./ChooseEmail";

export const ModalContext = createContext({});

const ChooseLessonsModal = ({ setShowModal, onSubmitModal, withEmail }) => {
  const [step, setStep] = useState("sessionType");

  const stepToComponent = {
    "sessionType": ChooseSessionType,
    "date": ChooseDate,
    "email": ChooseEmailModal
  };

  const className = clsx({
    [classes.modal]: true,
    [classes[step]]: true
  });

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");

  const modalData = {
    selectedDay, setSelectedDay,
    selectedTime, setSelectedTime,
    email, setEmail,
    setStep,
    setShowModal,
    submitModal,
    withEmail
  };

  const CurrentStep = stepToComponent[step];

  return (
    <ModalFade onClickOutside={closeModal}>
      <button className={classes.closeModal} onClick={closeModal}>
        &#x2715;
      </button>
      <ModalContext.Provider value={modalData}>
        <CurrentStep close={closeModal} />
      </ModalContext.Provider>
    </ModalFade>
  );

  function closeModal () {
    setShowModal(false);
  }

  function submitModal (time) {
    onSubmitModal && onSubmitModal(time);
    closeModal();
  }
};

export default ChooseLessonsModal;
