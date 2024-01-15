"use client";

import "bear-react-carousel/dist/index.css";
import classes from "./NeilEducation.module.scss";
import BearCarousel, { BearSlideCard } from "bear-react-carousel";

const NeilEducation = ({}) => {
  return (
    <div className={classes.neilEducation} id="certificates">
      <h2 className={classes.header}>Education and Certification</h2>
      <div className={classes.content}>
        <div className={classes.text}>
          <p className={classes.paragraph}>
            An empathetic, hardworking and compassionate tutor with over 20
            years’ experience within Education in a range of environments.
          </p>
          <p className={classes.paragraph}>
            I have a good rapport with my students and am committed to providing
            a compassionate and non-judgemental approach, whilst maintaining a
            high standard of professionalism. Passionate about the development
            of self, individuals and local communities.
          </p>
          <p className={classes.paragraph}>
            I have taught English in different countries from USA (Fulbright
            Scholar), Cambodia, Borneo, Australia and Europe. Indeed, I enjoyed
            all these experiences and want to continue to help students that
            want to learn English from basic conversation through to exam
            preparation or business use. Whatever your needs I am ready to
            listen and plan lessons that are specific to your needs.
          </p>
        </div>
        <Certificates />
      </div>
    </div>
  );
};

function Certificates() {
  const images = [
    { href: "/cert1.png" },
    { href: "/cert2.png" },
    { href: "/cert3.png" },
  ];
  const bearSlideItemData = images.map((image) => {
    return {
      key: Math.random(),
      children: (
        <BearSlideCard>
          <img
            alt="certificate"
            className={classes.certificate}
            src={image.href}
          />
        </BearSlideCard>
      ),
    };
  });
  return (
    <BearCarousel
      className={classes.certificates}
      data={bearSlideItemData}
      height="450px"
      isEnablePagination={true}
      isEnableAutoPlay={true}
      autoPlayTime={5000}
      isEnableLoop={true}
      spaceBetween={24}
      slidesPerView={2}
    />
  );
}

export default NeilEducation;
