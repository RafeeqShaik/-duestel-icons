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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m20.01 18.51-4.95-4.95M18.6 7.2c.78.78.78 2.05 0 2.83l-3.54 3.54M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l1.46 1.46M2 21h6M6.56 7.92l7.07 7.07"
    />
  </svg>
);
export default SvgBroken;