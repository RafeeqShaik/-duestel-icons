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
      d="M20.95 4.13 4.13 20.95c.95.69 2.19 1.05 3.68 1.05h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68M18.5 16.25h-1.69V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81V13c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68L19.87 3.05C18.92 2.36 17.68 2 16.19 2M10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgBold;
