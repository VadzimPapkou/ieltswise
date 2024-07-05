import React, { createContext, createRef, useState } from "react";
import classes from "./ChooseLessonsModal.module.scss";
import ModalFade from "../ModalFade";
import ChooseSessionType from "./ChooseSessionType";
import ChooseDate from "./ChooseDate";
import ChooseEmailModal from "./ChooseEmail";
import moment from "moment";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

export const ModalContext = createContext({});

const transitionClassNames = {
  enter: classes.enter,
  enterActive: classes.enterActive,
  enterDone: classes.enterDone,
  exit: classes.exit,
  exitActive: classes.exitActive,
  exitDone: classes.exitDone,
};

const ChooseLessonsModal = ({
  show,
  setShow,
  onSubmitModal,
  withEmail,
  withSessionType = true,
  defaultSessionType,
}) => {
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

  const ref = createRef();

  return (
    <ModalContext.Provider value={modalData}>
      <CSSTransition in={show} timeout={300} unmountOnExit nodeRef={ref} classNames={transitionClassNames}>
        <ModalFade onClickOutside={() => setShow(false)} ref={ref}>
          <CurrentStep />
        </ModalFade>
      </CSSTransition>
    </ModalContext.Provider>
  );

  async function submitModal() {
    await onSubmitModal({ selectedTime, email, sessionType });
  }
};

ChooseLessonsModal.propTypes = {
  setShow: PropTypes.func.isRequired,
  onSubmitModal: PropTypes.func.isRequired,
};

export default ChooseLessonsModal;
