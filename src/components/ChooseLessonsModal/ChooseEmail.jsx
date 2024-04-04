import React, { useContext, useEffect, useState } from "react";
import classes from "./ChooseEmail.module.scss";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { ModalContext } from "./ChooseLessonsModal";
import axiosClient, { apiUrl } from "../../axiosClient";
import { ColorRing } from "react-loader-spinner";
import clsx from "clsx";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { isEmail } from "../../common";

const ChooseEmail = ({ close }) => {
  const { setStep, email, setEmail, selectedTime, sessionType, submitModal } = useContext(ModalContext);

  const [loading, setLoading] = useState(false);

  const modalClass = clsx({
    [classes.modal]: true,
    [classes.modalLoading]: loading,
  });

  const { register, handleSubmit, formState } = useForm();

  useEffect(() => {
    if (!email) return;
    submitModal();
  }, [email]);

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
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              register={() =>
                register("email", {
                  required: { value: true, message: "Please enter your email." },
                  validate: (value) => isEmail(value) || "Please enter a valid email.",
                })
              }
              className={classes.email}
              type="email"
              placeholder="email@example.com"
              validityState={formState.errors.email ? "invalid" : "default"}
              validationMessage={formState.errors?.email?.message || ""}
            />
            <Button variant="link" type="submit">
              Enroll
            </Button>
            <Button variant="text" type="button" onClick={onBackClick}>
              Back
            </Button>
          </form>
        </>
      )}
    </Modal>
  );

  function onBackClick() {
    setStep("date");
  }

  function onSubmit({ email }) {
    debugger;
    setLoading(true);
    setEmail(email);
  }
};

export default ChooseEmail;
