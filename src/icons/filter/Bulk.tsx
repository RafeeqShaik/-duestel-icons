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
      d="M20.6 4.1v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-1-1.05 5.82-9.35h5.68c1.1 0 2 .9 2 2"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="m11.3 2.1-5.18 8.31L4.3 8.5c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1z"
    />
  </svg>
);
export default SvgBulk;
