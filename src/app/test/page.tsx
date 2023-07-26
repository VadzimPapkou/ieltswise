"use client";

import React, { useState } from "react";
import TextField, {
  TextFieldValidityState,
} from "../../components/TextField/TextField";

const Page = () => {
  const [v, sv] = useState("");
  const [vs, svs] = useState<TextFieldValidityState>();

  return (
    <div>
      <TextField
        onChange={handleChange}
        value={v}
        placeholder="Password"
        helperText="To secure your account"
        validityState={vs}
        validationMessage="Validation message goes here"
      />
    </div>
  );

  function handleChange(e: any) {
    const value = e.target.value;
    if (value === "") {
      svs("invalid");
    } else if (value.length < 6) {
      svs("warning");
    } else {
      svs("valid");
    }
    sv(value);
  }
};

export default Page;
