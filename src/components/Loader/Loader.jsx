"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ primaryColor = "#fff", secondaryColor = "transparent" }) => {
  return (
    <Oval
      height={24}
      width={24}
      color={primaryColor}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
