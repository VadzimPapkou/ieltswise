import classes from "./SuccessPaymentModal.module.scss";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import axiosClient from "../../axiosClient";
import ModalFade from "../../components/ModalFade";
import Modal from "../../components/Modal";
import { ColorRing, Oval } from "react-loader-spinner";
import { primary } from "../../colors";
import clsx from "clsx";

export function SuccessPaymentModal ({ setShow }) {
  const [loading, setLoading] = useState(true);
  const close = () => setShow(false);

  useEffect(() => {
    (async () => {
      const url = new URL(window.location.href);

      const studentEmail = url.searchParams.get("studentEmail");
      const startDate = url.searchParams.get("date");
      const endDate = +moment(+startDate).add(59, "minutes");
      const paymentId = url.searchParams.get("paymentId");
      const payerID = url.searchParams.get("PayerID");

      try {
        const { data, status } = await axiosClient.post("/student/bookRegularSession", {
          tutorEmail: "test.tutor1.ieltswise67@gmail.com",
          studentEmail,
          startDate,
          endDate,
          paymentId,
          payerID
        });
        console.log("data status", data, status);
      } finally {
        setLoading(false);
      }
    })();
  }, [window.location.href]);

  const url = new URL(window.location.href);
  const startDate = url.searchParams.get("date");
  const studentEmail = url.searchParams.get("studentEmail");

  const modalClass = clsx({
    [classes.modal]: true,
    [classes.loading]: loading
  })

  return (
    <ModalFade onClickOutside={close}>
      <Modal onCloseClick={close} className={modalClass}>
        {loading && <ColorRing
          height="80"
          width="80"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        {!loading && (
          <>
            <h3 className={classes.title}>Thank you for registering for the chat!</h3>
            <p className={classes.youChoose}>Since you choose:</p>
            <div className={classes.dateContainer}>
              <p className={classes.date}>{moment(+startDate).format("DD.MM.YYYY - H a")}</p>
            </div>
            <p className={classes.checkMail}>
              An invitation to the lesson has been sent to <b>{studentEmail}</b>. Please check your email and
              confirm your lesson. if you change
              your mind about coming to the online lesson, please cancel 24 hours in advance.
            </p>
          </>
        )}
      </Modal>
    </ModalFade>
  );
}