import classes from "./NeilWood.module.scss";
import React from "react";
import NeilHeader from "./NeilHeader";
import NeilInfo from "./NeilInfo";
import NeilEducation from "./NeilEducation";
import { Reviews } from "../../../components/Reviews/Reviews";
import { ReviewsList } from "../../../components/Reviews/ReviewsList";

export const metadata = {
  title: "IELTSwise: Neil Wood - Expert IELTS Tutor",
  description:
    "Neil Wood is an expert IELTS tutor at IELTSwise, dedicated to helping students achieve their highest potential. Through personalized tutoring and effective study plans, Neil guides you every step of the way. Experience top-tier IELTS tutoring with Neil at IELTSwise.",
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
