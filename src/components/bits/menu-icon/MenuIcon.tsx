import * as React from "react";
import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={48}
      d="M88 152h336M88 256h336M88 360h336"
    />
  </svg>
);
export default MenuIcon;
