import React, { SVGProps } from "react";

type Arrow2Props = {
  color: string;
} & SVGProps<SVGElement>;

const Arrow2 = ({ color = "#0C0507", className }: Arrow2Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Type=arrow 2">
        <g id="arrow-left">
          <path
            id="Vector"
            d="M7 12H14"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M12.5 9L15.5 12L12.5 15"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Arrow2;
