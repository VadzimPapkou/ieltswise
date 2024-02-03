import classes from "./SuccessPaymentModal.module.scss";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import axiosClient from "../../axiosClient";
import ModalFade from "../../components/ModalFade";
import Modal from "../../components/Modal";
import { ColorRing, Oval } from "react-loader-spinner";
import { primary } from "../../colors";
import clsx from "clsx";
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

export function SuccessPaymentModal ({ setShow }) {
  const [loading, setLoading] = useState(true);
  const close = () => setShow(false);

  useEffect(() => {
    (async () => {
      const url = new URL(window.location.href);

      const studentEmail = url.searchParams.get("studentEmail");
      const datestampStartDate = +url.searchParams.get("date");
      const startDate = moment(datestampStartDate);
      const endDate = moment(startDate).add(59, "minutes");
      const paymentId = url.searchParams.get("paymentId");
      const payerID = url.searchParams.get("PayerID");
      const sessionType = url.searchParams.get("sessionType");

      try {
        const { data, status } = await axiosClient.post("/student/bookRegularSession", {
          tutorEmail: "test.tutor1.ieltswise67@gmail.com",
          studentEmail,
          startDate: startDate.toISOString(true),
          endDate: endDate.toISOString(true),
          paymentId,
          payerID,
          sessionType
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
  const sessionType = url.searchParams.get("sessionType");

  const formattedDate = moment(+startDate)
    .format("DD.MM.YYYY – 7 ") +
    moment(+startDate)
    .format("a")
    .split("")
    .map(x => x + ".")
    .join("");

  const modalClass = clsx({
    [classes.modal]: true,
    [classes.loading]: loading
  });

  return (
    <ModalFade onClickOutside={close}>
      <Modal onCloseClick={close} className={modalClass}>
        {loading && <ColorRing
          height="80"
          width="80"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />}
        {!loading && (
          <>
            <div className={classes.header}>
              <Image src="/success-payment-icon.svg" alt="" width={168} height={168} />
              <h3 className={classes.title}>Payment was successful!</h3>
            </div>
            <div className={classes.message}>
              <p className={classes.messageTitle}>Thank you for registering for the lesson!</p>
              <p className={classes.messageText}>
                Your lesson will appear in “<span className={classes.email}>{studentEmail}</span>”, if you change your mind about coming to the
                online lesson, please <b>cancel 24 hours in advance</b>.
              </p>
              <div className={classes.sessionTypeContainer}>
                <div className={classes.sessionIcon}>
                  <Image src={serviceToIcon[sessionType].iconSrc} alt="" width={24} height={24} />
                </div>
                <div className={classes.sessionText}>
                  <p className={classes.sessionTitle}>{sessionType}</p>
                  <p className={classes.sessionDate}>{formattedDate}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </ModalFade>
  );
}