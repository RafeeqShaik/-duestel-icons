import * as React from "react";
import type { SVGProps } from "react";
const SvgTwotone = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25M5.85 4.48A9.94 9.94 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25"
      opacity={0.4}
    />
  </svg>
);
export default SvgTwotone;