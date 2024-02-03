import React from "react";
import classes from "./BookStatusModal.module.scss";
import clsx from "clsx";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import moment from "moment";
import Image from "next/image";

const serviceToIcon = {
  "IELTS preparation": {
    iconSrc: "/service-icon-1.svg"
  },
  "Functional English": {
    iconSrc: "/service-icon-4.svg"
  },
  "Conversational English": {
    iconSrc: "/service-icon-5.svg"
  },
  "Business English": {
    iconSrc: "/service-icon-3.svg"
  },
  "Improve English": {
    iconSrc: "/service-icon-6.svg"
  }
};

const BookStatusModal = ({ setShow, response }) => {
  const statusToComponent = {
    success: SuccessModal,
    error: ErrorModal
  };
  console.log(response);
  let status;
  if (response.status === 200) {
    status = "success";
  } else {
    status = "error";
  }

  const StatusModal = statusToComponent[status];
  return (
    <ModalFade onClickOutside={() => setShow(false)}>
      <StatusModal setShow={setShow} response={response} />
    </ModalFade>
  );
};

const SuccessModal = ({ response, setShow }) => {
  const sessionIcon = serviceToIcon[response.data.requestedService]?.iconSrc || "/service-icon-1.svg";
  return (
    <Modal className={classes.modal} onCloseClick={() => setShow(false)}>
      <h3 className={classes.title}>Thank you for registering for the free chat!</h3>
      <p className={classes.youChoose}>Since you choose:</p>
      <div className={classes.sessionInfo}>
        <div className={classes.sessionTypeContainer}>
          <div className={classes.sessionIcon}>
            <Image src={sessionIcon} alt="" width={24} height={24} />
          </div>
          <p className={classes.sessionType}>{response.data.requestedService}</p>
        </div>
        <div className={classes.dateContainer}>
          <p className={classes.date}>{moment(response.data.startDate).format("DD.MM.YYYY - H a")}</p>
        </div>
      </div>
      <p className={classes.checkMail}>
        An invitation to the lesson has been sent to <b>{response.data.studentEmail}</b>. Please check your email and
        confirm your lesson. if you change
        your mind about coming to the online lesson, please cancel 24 hours in advance.
      </p>
    </Modal>
  );
};

const ErrorModal = ({ setShow, response }) => (
  <Modal className={classes.modal} onCloseClick={() => setShow(false)}>
    <h3 className={classes.title}>Something went wrong. Please, try again later</h3>
    <p>{response.data}</p>
  </Modal>
);

export default BookStatusModal;
