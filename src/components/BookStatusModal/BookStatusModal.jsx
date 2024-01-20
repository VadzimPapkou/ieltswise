import React from "react";
import classes from "./BookStatusModal.module.scss";
import clsx from "clsx";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import moment from "moment";

const BookStatusModal = ({ setShow, response }) => {
  const statusToComponent = {
    success: SuccessModal,
    error: ErrorModal,
  }
  console.log(response);
  let status;
  if(response.status === 200) {
    status = "success"
  } else {
    status = "error"
  }

  const StatusModal = statusToComponent[status];
  return (
    <ModalFade onClickOutside={() => setShow(false)}>
      <StatusModal setShow={setShow} response={response} />
    </ModalFade>
  );
};

const SuccessModal = ({ response, setShow }) => (
  <Modal className={classes.modal} onCloseClick={() => setShow(false)}>
    <h3 className={classes.title}>Thank you for registering for the free chat!</h3>
    <p className={classes.youChoose}>Since you choose:</p>
    <div className={classes.dateContainer}>
      <p className={classes.date}>{moment(response.data.sessionTime).format("DD.MM.YYYY - H a")}</p>
    </div>
    <p className={classes.checkMail}>
      An invitation to the lesson has been sent to <b>{response.data.studentEmail}</b>. Please check your email and confirm your lesson. if you change
      your mind about coming to the online lesson, please cancel 24 hours in advance.
    </p>
  </Modal>
);

const ErrorModal = ({ setShow, response }) => (
  <Modal className={classes.modal} onCloseClick={() => setShow(false)}>
    <h3 className={classes.title}>Something went wrong. Please, try again later</h3>
    <p>{response.data}</p>
  </Modal>
)

export default BookStatusModal;
