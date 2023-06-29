"use client";
import React from "react";
import classes from "./ContactUs.module.scss";
import clsx from "clsx";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

type ContactUsProps = {};

const ContactUs: React.FC = ({}: ContactUsProps) => {
  return (
    <div className={classes.contactUs}>
      <h2 className={clsx(classes.header, "h1-like")}>
        Leave your contact information and I’ll help you choose a session to
        meet your goals!
      </h2>
      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <TextField placeholder="Name" className={classes.textField} />
        <TextField placeholder="E-mail" className={classes.textField} />
        <TextField
          placeholder="Enter the Session that Interests you."
          className={classes.textField}
        />
        <Button className={classes.contactButton} variant="card">
          Leave a request
        </Button>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
  }
};

export default ContactUs;
