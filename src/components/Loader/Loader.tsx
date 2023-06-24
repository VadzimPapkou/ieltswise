"use client";
import React from "react";
import { Oval } from  "react-loader-spinner";

type LoaderProps = {
  primaryColor?: string,
  secondaryColor?: string,
}

const Loader = ({primaryColor = "#fff", secondaryColor = "transparent"}: LoaderProps) => {
  return (
    <Oval
      height={24}
      width={24}
      color={primaryColor}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor={secondaryColor}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;