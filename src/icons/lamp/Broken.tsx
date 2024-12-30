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
      d="M4.53 9.04a8.71 8.71 0 0 1 7.41-4.11h.12c4.82 0 8.72 3.9 8.72 8.72v4.94H3.22v-4.94M12 2v2.93M15.65 18.59A3.66 3.66 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41z"
    />
  </svg>
);
export default SvgBroken;
