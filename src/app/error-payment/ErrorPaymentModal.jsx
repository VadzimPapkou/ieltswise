"use client";

import classes from "./ErrorPaymentModal.module.scss";
import ModalFade from "../../components/ModalFade";
import Modal from "../../components/Modal";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useState } from "react";

export function ErrorPaymentModal() {
  const [showModal, setShowModal] = useState(true);

  const close = () => setShowModal(false);

  if (!showModal) return null;

  return (
    <ModalFade onClickOutside={close}>
      <Modal onCloseClick={close} className={classes.modal}>
        <div className={classes.header}>
          <Image className={classes.icon} src="/error-payment-icon.svg" alt="" width={168} height={168} />
          <h3 className={classes.title}>Payment Error:(</h3>
          <p className={classes.titleDescription}>
            Sorry, your transaction has failed. <br /> Please try again!
          </p>
        </div>
        <Button className={classes.goHome} variant="primary">
          Back to Home Page
        </Button>
      </Modal>
    </ModalFade>
  );
}
