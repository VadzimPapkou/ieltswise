import React from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import clsx from "clsx";
import Arrow2 from "../../icon-components/Arrow2/Arrow2";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image className={classes.logoImg} alt="Neil wood" src="/logo.svg" width={171} height={52} />
        </Link>
        <div className={classes.links}>
          <Link href={"#aboutTutor"} className={clsx(classes.link)}>
            <span className={clsx("p1")}>Tutor</span>
          </Link>
          <Link href={"#contacts"} className={clsx(classes.link)}>
            <span className={clsx("p1")}>Contacts</span>
          </Link>
        </div>
        <button className={classes.menu}>
          ☰
        </button>
        {/*<div className={classes.verticalDivider} />*/}
        {/*<Link href={"/"} className={clsx(classes.link, classes.logIn)}>*/}
        {/*  <Button variant="text">Login</Button>*/}
        {/*  <Arrow2 color={"var(--primary-500)"} className={classes.logInArrow} />*/}
        {/*</Link>*/}
        {/*<Link href={"/"} className={classes.signUp}>*/}
        {/*  <Button variant="pill">Sign Up</Button>*/}
        {/*</Link>*/}
      </header>
    </div>
  );
};

export default Header;
