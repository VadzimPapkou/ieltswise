import React, { SVGProps } from "react";

type TestProps = {} & SVGProps<SVGElement>;

const Test = ({ className }: TestProps) => {
  return <svg></svg>;
};

export default Test;
