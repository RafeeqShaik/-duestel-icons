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
      d="M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
      opacity={0.4}
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8"
    />
  </svg>
);
export default SvgTwotone;