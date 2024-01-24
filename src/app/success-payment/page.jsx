"use client";

import Home from "../page";
import { useState } from "react";
import { SuccessPaymentModal } from "./SuccessPaymentModal";

export default function SuccessPayment () {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Home />
      {showModal && <SuccessPaymentModal setShow={setShowModal} />}
    </>
  );
}
