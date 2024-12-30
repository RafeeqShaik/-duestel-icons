import * as React from "react";
import type { SVGProps } from "react";
const SvgBroken = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.97 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7M19.72 3.25 3.27 19.7"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.06 18v-5M18.5 15.5h-5M10.5 7.5h-5"
    />
  </svg>
);
export default SvgBroken;
