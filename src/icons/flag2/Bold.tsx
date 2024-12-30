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
      d="m15.2 7.16-8-3.46v-.95c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.96l8.22-4.06h.01c1.66-.86 2.55-1.97 2.5-3.14s-1.02-2.21-2.73-2.93"
    />
  </svg>
);
export default SvgBold;
