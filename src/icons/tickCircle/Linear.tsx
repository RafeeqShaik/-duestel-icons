import * as React from "react";
import type { SVGProps } from "react";
const SvgLinear = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.75 12 2.83 2.83 5.67-5.66"
    />
  </svg>
);
export default SvgLinear;