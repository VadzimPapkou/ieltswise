import ModalFade from "../ModalFade";
import Modal from "../Modal";
import classes from "./NewReviewModal.module.scss";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { isEmail } from "../../common";
import { TextArea } from "../TextArea/TextArea";

export function NewReviewModal({ close, submitReview }) {
  const { register, handleSubmit, formState, setError } = useForm({
    defaultValues: {
      email: "",
      value: "",
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <ModalFade onClickOutside={close}>
      <Modal className={classes.modal} onCloseClick={close}>
        <h3 className={classes.title}>Share your emotions about the lesson.</h3>
        <p className={classes.info}>
          Before writing a review, please fill out your email so we can understand that you actually attended our
          lesson.
        </p>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={classes.reviewEmail}
            placeholder="email@example.com"
            type="email"
            register={() =>
              register("email", {
                required: { value: true, message: "Email is required." },
                validate: {
                  isEmail: (value) => isEmail(value) || "Please enter a valid email.",
                },
              })
            }
            validityState={formState.errors.email ? "invalid" : "default"}
            validationMessage={formState.errors.email ? formState.errors.email.message : ""}
          />
          <TextArea
            className={classes.reviewTextArea}
            placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
            register={() =>
              register("value", {
                required: { value: true, message: "Please enter your feedback." },
                maxLength: { value: 1000, message: "Maximum review length is 1000" },
              })
            }
            validityState={formState.errors.value ? "invalid" : "default"}
            validationMessage={formState.errors.value ? formState.errors.value.message : ""}
          />
          {formState.errors?.root?.serverError && (
            <p className={classes.error}>{formState.errors.root.serverError.message}</p>
          )}
          <Button className={classes.publishButton} variant="primary" disabled={loading}>
            Publish
          </Button>
        </form>
      </Modal>
    </ModalFade>
  );

  async function onSubmit(formData) {
    if (loading) return;
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      await submitReview(formData);
    } catch (e) {
      const error = e?.response?.data || e.message;
      setError("root.serverError", { type: "custom", message: error });
    }
  }
}
