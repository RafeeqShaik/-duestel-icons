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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M15.5 10.5c-1.24 0-2.25-1.01-2.25-2.25S14.26 6 15.5 6s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75M8.5 10.5c-1.24 0-2.25-1.01-2.25-2.25S7.26 6 8.5 6s2.25 1.01 2.25 2.25S9.74 10.5 8.5 10.5m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75M12 19.45c-2.9 0-5.25-2.36-5.25-5.25 0-.91.74-1.65 1.65-1.65h7.2c.91 0 1.65.74 1.65 1.65 0 2.89-2.35 5.25-5.25 5.25m-3.6-5.4c-.08 0-.15.07-.15.15 0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-.08-.07-.15-.15-.15z"
    />
  </svg>
);
export default SvgOutline;