import * as React from "react";
import type { SVGProps } from "react";
const SvgBulk = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || "currentColor"}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
    />
  </svg>
);
export default SvgBulk;
