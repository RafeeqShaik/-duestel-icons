import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || "currentColor"}
      d="M17.88 6.12 3.92 20.08c-.43.43-1.15.39-1.5-.1-.5-.69-.6-1.65-.08-2.48l2.76-4.43c.37-.59.37-1.55 0-2.14L2.34 6.5c-.93-1.48.14-3.4 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.24.4.19.91-.14 1.24M21.63 13.11l-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51c-.89 0-1.34-1.08-.71-1.71L18.32 7.68c.45-.45 1.22-.37 1.56.18l1.85 2.97c.4.64.36 1.67-.1 2.28"
    />
  </svg>
);
export default SvgBold;
