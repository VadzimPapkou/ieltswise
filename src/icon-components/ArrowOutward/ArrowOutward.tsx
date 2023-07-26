import React, { SVGProps } from "react";

type ArrowOutwardProps = {
  color?: string;
} & SVGProps<SVGElement>;

const ArrowOutward = ({ className, color = "#222222" }: ArrowOutwardProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H14.59L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L16 9.41V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6H7Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowOutward;
