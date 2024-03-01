import * as React from "react";

function Squiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 512 512"
      overflow="visible"
      {...props}
    >
      <path
        d="M248.7 509.9c27.4 13-27.4-162.7 27.4-130.2 57.4 34.1 1.1-157.7-41.1-97.6-13.7 19.5 62.8-172.9 13.7-156.2-95.9 32.5 27.4-117.2 0-123.7"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  );
}

export default Squiggle;
