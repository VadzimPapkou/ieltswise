import React from "react";

export default function ErrorPayment() {
  if(typeof window === "undefined") return <div />;

  return (
    <main>
      Success
    </main>
  );
}
