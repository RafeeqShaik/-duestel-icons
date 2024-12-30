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
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M12 19.25c-2.15 0-4.17-1.05-5.4-2.82a.74.74 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19A5.1 5.1 0 0 0 12 17.76c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.34.24.42.7.19 1.04a6.58 6.58 0 0 1-5.4 2.82"
    />
  </svg>
);
export default SvgBulk;
