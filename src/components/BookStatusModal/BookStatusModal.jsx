import React from "react";
import classes from "./BookStatusModal.module.scss";
import clsx from "clsx";
import ModalFade from "../ModalFade";
import Modal from "../Modal";
import moment from "moment";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

const serviceToIcon = {
  "IELTS preparation": {
    iconSrc: "/service-icon-1.svg",
  },
  "Functional English": {
    iconSrc: "/service-icon-4.svg",
  },
  "Conversational English": {
    iconSrc: "/service-icon-5.svg",
  },
  "Business English": {
    iconSrc: "/service-icon-3.svg",
  },
  "Improve English": {
    iconSrc: "/service-icon-6.svg",
  },
};

const BookStatusModal = ({ setShow, response }) => {
  const statusToComponent = {
    success: SuccessModal,
    error: ErrorModal,
  };

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
        confirm your lesson. if you change your mind about coming to the online lesson, please cancel 24 hours in
        advance.
      </p>
    </Modal>
  );
};

const ErrorModal = ({ setShow, response }) => (
  <Modal className={classes.errorModal} onCloseClick={() => setShow(false)}>
    <div className={classes.errorHeader}>
      <Image className={classes.errorIcon} src="/error-payment-icon.svg" alt="" width={168} height={168} />
      <h3 className={classes.errorTitle}>Oops:(</h3>
      <p className={classes.errorSubtitle}>You have already used the free lesson.</p>
    </div>
    <Button className={classes.goHome} variant="primary" onClick={() => setShow(false)}>
      Back to Home Page
    </Button>
  </Modal>
);

export default BookStatusModal;
