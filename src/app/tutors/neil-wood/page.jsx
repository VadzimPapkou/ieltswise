import classes from "./NeilWood.module.scss";
import React from "react";
import NeilHeader from "./NeilHeader";
import NeilInfo from "./NeilInfo";
import Reviews from "../../../components/Reviews";
import NeilEducation from "./NeilEducation";
import { apiUrl } from "../../../axiosClient";

export default async function NeilWood() {
  const reviews = await fetchReviews();

  return (
    <main className={classes.neilWood}>
      <NeilHeader />
      <NeilInfo />
      <NeilEducation />
      <Reviews reviews={reviews} />
    </main>
  );
}

async function fetchReviews() {
  return fetch(apiUrl + "/comments").then((response) => response.json());
}
