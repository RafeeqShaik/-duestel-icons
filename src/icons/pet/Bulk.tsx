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
      d="M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85s1.41-2.77 1.14-4.43"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
    />
  </svg>
);
export default SvgBulk;