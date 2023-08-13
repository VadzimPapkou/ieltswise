import React, { SVGProps } from "react";

type Arrow3Props = {} & SVGProps<SVGElement>;

const Arrow3 = ({ className, color = "#fff" }: Arrow3Props) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-left">
        <path
          id="Vector"
          d="M15.4998 19.9201L8.97984 13.4001C8.20984 12.6301 8.20984 11.3701 8.97984 10.6001L15.4998 4.08008"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Arrow3;
