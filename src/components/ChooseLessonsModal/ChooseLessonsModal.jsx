import React, { createContext, useState } from "react";
import classes from "./ChooseLessonsModal.module.scss";
import ModalFade from "../ModalFade";
import ChooseSessionType from "./ChooseSessionType";
import ChooseDate from "./ChooseDate";
import ChooseEmailModal from "./ChooseEmail";
import moment from "moment";
import PropTypes from "prop-types";

export const ModalContext = createContext({});

const ChooseLessonsModal = ({ setShow, onSubmitModal, withEmail, withSessionType = true, defaultSessionType }) => {
  const [step, setStep] = useState(withSessionType ? "sessionType" : "date");

  const stepToComponent = {
    sessionType: ChooseSessionType,
    date: ChooseDate,
    email: ChooseEmailModal,
  };

  const [sessionType, setSessionType] = useState(defaultSessionType);
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");

  const modalData = {
    selectedDay,
    setSelectedDay,
    selectedTime,
    setSelectedTime,
    sessionType,
    setSessionType,
    email,
    setEmail,
    setStep,
    setShowModal: setShow,
    submitModal,
    withEmail,
    withSessionType,
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

  function closeModal() {
    setShow(false);
  }

  async function submitModal() {
    await onSubmitModal({ selectedTime, email, sessionType });
  }
};

ChooseLessonsModal.propTypes = {
  setShow: PropTypes.func.isRequired,
  onSubmitModal: PropTypes.func.isRequired,
};

export default ChooseLessonsModal;
