import * as React from "react";
import type { SVGProps } from "react";
const SvgOutline = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || "currentColor"}
      d="M12 18.75c-4.83 0-8.75-3.93-8.75-8.75S7.17 1.25 12 1.25s8.75 3.93 8.75 8.75-3.92 8.75-8.75 8.75m0-16C8 2.75 4.75 6 4.75 10S8 17.25 12 17.25 19.25 14 19.25 10 16 2.75 12 2.75M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgOutline;
