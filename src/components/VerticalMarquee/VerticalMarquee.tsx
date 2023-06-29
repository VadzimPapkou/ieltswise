import React from "react";
import "./VerticalMarquee.scss";
import clsx from "clsx";

type VerticalMarqueeProps = {
  children: JSX.Element | JSX.Element[];
  direction: "to-left" | "to-right";
};

const VerticalMarquee: React.FC = ({
  children,
  direction,
  className,
  ...props
}: VerticalMarqueeProps) => {
  return (
    <div className={clsx("marquee-wrapper", className)} {...props}>
      <div className="container">
        <div className="marquee-block">
          <div className={clsx("marquee-inner", direction)}>
            <span>{children}</span>
            <span>{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
