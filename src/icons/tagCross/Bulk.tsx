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
      d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.98 4.98 0 0 0 3.7 1.64"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="m14.59 12 1.94-1.94c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.94 1.94L11.59 9a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L12.47 12l-1.94 1.94c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.94-1.94L15.47 15c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
    />
  </svg>
);
export default SvgBulk;
