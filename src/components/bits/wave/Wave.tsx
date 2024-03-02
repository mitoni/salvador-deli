import * as React from "react";

const Wave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    overflow="visible"
    {...props}
  >
    <path
      d="M0 237.8c18.8 0 27.8 8.3 38.2 17.9 10.9 10.1 23.2 21.4 47.1 21.4 23.9 0 36.2-11.4 47.1-21.4 10.4-9.6 19.4-18 38.2-18 18.8 0 27.8 8.3 38.2 17.9 10.9 10.1 23.2 21.4 47.1 21.4 23.9 0 36.2-11.4 47.1-21.4 10.4-9.6 19.4-18 38.2-18 18.8 0 27.8 8.3 38.2 18 10.9 10 23.2 21.4 47.1 21.4 23.9 0 36.3-11.4 47.1-21.4 10.4-9.6 19.5-18 38.2-18"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);

export default Wave;
