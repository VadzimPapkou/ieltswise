import React from "react";
import classes from "./NeilHeader.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../../components/Button/Button";

const NeilHeader = ({}) => {
  return <div className={classes.header}>
    <img className={classes.neilPhoto} src="/neil.png" alt="neil wood" />
    <div className={classes.headerText}>
      <h1 className="h3-like">
        <b>Neil Wood</b>
        <Image
          className={classes.uk}
          alt={"United Kingdom"}
          src={"/uk.svg"}
          width={20}
          height={15}
        />
      </h1>
      <p className={classes.tutorWho}>
        Highly Qualified Exam (IELTS; TOEFL; TOEIC) English Teacher
        with&nbsp;
        <b>over 18 years’ experience.</b>
      </p>
    </div>
    <div className={classes.linksContainer}>
      <div className={classes.links}>
        <Link href="/" className={clsx(classes.textLink, "p1")}>
          <Image alt="google" src="/google.svg" width={32} height={32} />
        </Link>
        <Link href="/" className={clsx(classes.textLink, "p1")}>
          <Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
        </Link>
        <Link href="/" className={clsx(classes.textLink, "p1")}>
          <Image alt="facebook" src="/facebook.svg" width={32} height={32} />
        </Link>
      </div>
      <Button variant="primary">
        View Sessions
      </Button>
    </div>
  </div>;
};

export default NeilHeader;
