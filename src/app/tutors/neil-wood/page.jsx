import classes from "./NeilWood.module.scss";
import React from "react";
import NeilHeader from "./NeilHeader";
import NeilInfo from "./NeilInfo";
import NeilEducation from "./NeilEducation";
import { Reviews } from "../../../components/Reviews/Reviews";
import { ReviewsList } from "../../../components/Reviews/ReviewsList";

export const metadata = {
  title: "English tutor | Neil Wood",
  description: "Highly Qualified Exam (IELTS; TOEFL; TOEIC) English Teacher with over 18 years’ experience.",
};

export default async function NeilWood() {
  return (
    <main className={classes.neilWood}>
      <NeilHeader />
      <NeilInfo />
      <NeilEducation />
      <Reviews>
        <ReviewsList />
      </Reviews>
    </main>
  );
}
