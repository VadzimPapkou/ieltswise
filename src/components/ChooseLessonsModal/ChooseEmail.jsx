import React, { useContext, useState } from "react";
import classes from "./ChooseEmail.module.scss";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { ModalContext } from "./ChooseLessonsModal";
import axiosClient, { apiUrl } from "../../axiosClient";
import { ColorRing } from "react-loader-spinner";
import clsx from "clsx";
import Modal from "../Modal";

const ChooseEmail = ({ close }) => {
  const { setStep, email, setEmail, selectedTime, sessionType, submitModal } = useContext(ModalContext);

  const [loading, setLoading] = useState(false);

  const nextDisabled = !email || !email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

  const modalClass = clsx({
    [classes.modal]: true,
    [classes.modalLoading]: loading,
  });

  return (
    <Modal className={modalClass} onCloseClick={close}>
      {loading && <ColorRing height="80" width="80" colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} />}
      {!loading && (
        <>
          <h3 className={classes.title}>Start Learning</h3>
          <p className={classes.enterEmail}>
            Our lesson will be via Google Meet. Please enter your Email address to allow me to send you an invitation to
            the lesson.
          </p>
          <div className={classes.form}>
            <TextField
              className={classes.email}
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="link" onClick={onNextClick}>
              Enroll
            </Button>
            <Button variant="text" onClick={onBackClick}>
              Back
            </Button>
          </div>
        </>
      )}
    </Modal>
  );

  function onBackClick() {
    setStep("date");
  }

  function onNextClick() {
    if (nextDisabled) return;
    setLoading(true);
    submitModal();
  }
};

export default ChooseEmail;
