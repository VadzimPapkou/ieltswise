import ModalFade from "../ModalFade";
import Modal from "../Modal";
import classes from "./NewReviewModal.module.scss";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

export function NewReviewModal({ close, onSubmit }) {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <ModalFade onClickOutside={close}>
      <Modal className={classes.modal} onCloseClick={close}>
        <h3 className={classes.title}>Share your emotions about the lesson.</h3>
        <p className={classes.info}>
          Before writing a review, please fill out your email so we can understand that you actually attended our
          lesson.
        </p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.reviewEmail}
            placeholder="email@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={classes.reviewTextArea}
            placeholder="Share some insights about Neil session. Tell us what the tutor helped you with, about his behavior, approach ect. "
            onChange={(e) => setValue(e.target.value)}
          />
          {error && <p className={classes.error}>{error}</p>}
          <Button className={classes.publishButton} variant="primary" disabled={loading}>
            Publish
          </Button>
        </form>
      </Modal>
    </ModalFade>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      await onSubmit(email, value);
    } catch (e) {
      const error = e?.response?.data || e.message;
      setError(error);
    }
  }
}
