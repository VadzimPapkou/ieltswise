import classes from "./NeilWood.module.scss";
import React from "react";
import NeilHeader from "./NeilHeader";
import NeilInfo from "./NeilInfo";
import Reviews from "../../../components/Reviews";
import NeilEducation from "./NeilEducation";

export default function NeilWood() {
  return (
    <main className={classes.neilWood}>
      <NeilHeader />
      <NeilInfo />
      <NeilEducation />
      <Reviews />
    </main>
  );
}
