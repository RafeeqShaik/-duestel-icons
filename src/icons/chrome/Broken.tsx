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
      d="M3.13 16.62A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M21.17 8c-3.02-.66-6.15-.66-9.17 0"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.95 6.06.02.06C4.98 9.01 6.53 11.69 8.54 14M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
    />
  </svg>
);
export default SvgBroken;