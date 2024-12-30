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
      d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4M13.38 10c.33 1.31.33 2.69 0 4"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.97 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5"
    />
  </svg>
);
export default SvgBroken;
