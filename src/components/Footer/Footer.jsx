import React from "react";
import classes from "./Footer.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoColumn}>
        <Link href="/">
          <Image className={classes.logo} src="/logo.svg" alt="neil wood english tutor" width={171} height={52} />
        </Link>
        <p className={classes.copyright}>© 2023 IELTSWISE Education</p>
      </div>
      <div className={classes.servicesColumn}>
        <h5 className="h5-like">Services</h5>
        <div className={classes.links}>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            IELTS preparation
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Functional English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Conversational English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Business English
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Improve English
          </Link>
        </div>
      </div>
      <div className={classes.infoColumn}>
        <h5 className="h5-like">Info</h5>
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
      <div className={classes.legalColumn}>
        <h5 className="h5-like">Legal</h5>
        <div className={classes.links}>
          <p className={classes.copyrightMobile}>© 2023 IELTSWISE Education</p>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Terms&Conditions
          </Link>
          <Link href="/" className={clsx(classes.textLink, "p1")}>
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className={classes.social} id="contacts">
        <h5 className="h5-like">Social</h5>
        <div className={classes.links}>
          <Link href="mailto:aid.ieltswise@gmail.com" className={clsx(classes.textLink, "p1")}>
            <Image alt="google" src="/google.svg" width={32} height={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ieltswise-education-944975272"
            className={clsx(classes.textLink, "p1")}
          >
            <Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61554267389898" className={clsx(classes.textLink, "p1")}>
            <Image alt="facebook" src="/facebook.svg" width={32} height={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
