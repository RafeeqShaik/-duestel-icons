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
      d="M12 22.72c-2.67 0-5.35-.96-7.38-2.89-2.13-2.02-3.33-4.74-3.37-7.66-.04-2.93 1.08-5.68 3.15-7.75C8.59.23 15.41.23 19.6 4.42c2.07 2.07 3.19 4.82 3.15 7.75s-1.24 5.65-3.37 7.66c-2.03 1.93-4.71 2.89-7.38 2.89m0-19.94c-2.37 0-4.74.9-6.54 2.7a9.2 9.2 0 0 0-2.71 6.67 9.12 9.12 0 0 0 2.9 6.59c3.5 3.32 9.2 3.31 12.7 0a9.22 9.22 0 0 0 2.9-6.59c.04-2.51-.93-4.89-2.71-6.67A9.22 9.22 0 0 0 12 2.78"
    />
    <path
      fill={props.color || "currentColor"}
      d="M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03s.27.78-.03 1.06c-1.2 1.13-2.77 1.7-4.35 1.7"
    />
  </svg>
);
export default SvgOutline;
