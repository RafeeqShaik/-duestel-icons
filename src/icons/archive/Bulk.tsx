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
      d="M19.5 9.97V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3V9.97c.16.02.33.03.5.03h14c.17 0 .34-.01.5-.03"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5q0-3 3-3h14q3 0 3 3M13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgBulk;