import React, { useContext, useState } from "react";
import classes from "./ChooseEmail.module.scss";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { ModalContext } from "./ChooseLessonsModal";
import axiosClient, { apiUrl } from "../../axiosClient";
import { ColorRing } from "react-loader-spinner";
import clsx from "clsx";
import Modal from "../Modal";

const ChooseEmail = ({close}) => {

  const { setStep, email, setEmail, selectedTime } = useContext(ModalContext);

  const [loading, setLoading] = useState(false);

  const nextDisabled = !email || !email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

  const modalClass = clsx({
    [classes.modal]: true,
    [classes.modalLoading]: loading
  })

  return (
    <Modal className={modalClass} onCloseClick={close}>
      {loading && <ColorRing
        height="80"
        width="80"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />}
      {!loading && (
        <>
          <h3 className={classes.title}>Start Learning</h3>
          <p className={classes.enterEmail}>Please enter your Email address to allow me to send you
            an invitation to the session.</p>
          <TextField className={classes.email}
                     placeholder="email@example.com"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
          />
          <div className={classes.buttons}>
            <Button variant="secondary" onClick={onBackClick}>Back</Button>
            <Button variant="primary" onClick={onNextClick} disabled={nextDisabled}>Continue</Button>
          </div>
        </>
      )}
    </Modal>
  );

  function onBackClick () {
    setStep("date");
  }

  async function onNextClick () {
    if (nextDisabled) return;

    setLoading(true);
    const successUrl = new URL(window.location.origin + "/success-payment");
    const cancelUrl = new URL(window.location.origin + "/error-payment");

    successUrl.searchParams.set("studentEmail", email);
    successUrl.searchParams.set("date", selectedTime);
    try {
      const url = new URL(apiUrl + "/payment/paymentLink");
      url.searchParams.set("successUrl", successUrl.toString());
      url.searchParams.set("cancelUrl", cancelUrl.toString());
      url.searchParams.set("studentEmail", email);
      const {data} = await axiosClient.get(url.toString());
      window.location.href = data;
    } finally {
      setLoading(false);
    }
  }

};

export default ChooseEmail;