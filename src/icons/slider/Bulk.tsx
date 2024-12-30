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
      d="M19 16.01V18c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-1.99z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M19 6v10.01H5V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75M21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgBulk;
