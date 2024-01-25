"use client";

import React, { useState } from "react";
import Home from "../page";
import { ErrorPaymentModal } from "./ErrorPaymentModal";

export default function ErrorPayment() {
  if(typeof window === "undefined") return <Home />;

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Home />
      {showModal && <ErrorPaymentModal setShow={setShowModal}/>}
    </>
  );
}
