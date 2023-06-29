import React from "react";
import classes from "./Footer.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC = ({}: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <Link href="/" className={classes.column}>
        <Image
          src="/logo-black.svg"
          alt="neil wood english tutor"
          width={150}
          height={44}
        />
      </Link>
      <div className={clsx(classes.column, classes.services)}>
        <p className="h5-like">Services</p>
        <div className={classes.links}>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            IELTS preparation
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Exam preparation
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Business English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Functional English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Conversational English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Improve English
          </Link>
        </div>
      </div>
      <div className={clsx(classes.column, classes.info)}>
        <p className="h5-like">Info</p>
        <div className={classes.links}>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Tutor
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Services
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Reviews
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Contact
          </Link>
        </div>
      </div>
      <div className={clsx(classes.column, classes.legal)}>
        <p className="h5-like">Legal</p>
        <div className={classes.links}>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Terms&Conditions
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className={clsx(classes.column, classes.social)}>
        <p className="h5-like">Social</p>
        <div className={classes.links}>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            <Image alt="google" src="/google.svg" width={32} height={32} />
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            <Image alt="linkedin" src="linkedin.svg" width={32} height={32} />
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            <Image alt="facebook" src="facebook.svg" width={32} height={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
