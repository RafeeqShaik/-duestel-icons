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
      strokeWidth={1.5}
      d="M3 7h18"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 12h12"
      opacity={0.34}
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 17h4"
    />
  </svg>
);
export default SvgTwotone;