import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image alt="Neil wood" src="./logo.svg" width={151} height={44}></Image>
      </Link>
      <Link href={"/"} className={clsx(classes.link)}>
        <span className={clsx("p1", classes.whiteText)}>Tutor</span>
      </Link>
      <Link href={"/"} className={clsx(classes.link)}>
        <span className={clsx("p1", classes.whiteText)}>Contact</span>
      </Link>
      <Link href={"/"} className={classes.logIn}>
        <Button type="small">Log in</Button>
      </Link>
    </header>
  );
};

export default Header;
