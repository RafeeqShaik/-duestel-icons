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
      d="M15.25 11.3h-1.7V7.34c0-.92-.5-1.11-1.11-.42l-.44.5-3.72 4.23c-.51.58-.3 1.05.47 1.05h1.7v3.96c0 .92.5 1.11 1.11.42l.44-.5 3.72-4.23c.51-.58.3-1.05-.47-1.05"
    />
  </svg>
);
export default SvgBulk;
