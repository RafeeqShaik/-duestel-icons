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
      d="M11.82 6.9a23 23 0 0 1 8.63-.24A9.98 9.98 0 0 0 12 2C8.89 2 6.11 3.42 4.27 5.65c.44 1.3 1 2.54 1.67 3.72.38.68 1.35.65 1.74-.02a5 5 0 0 1 4.14-2.45M7.72 14.72c-2-2.14-3.56-4.58-4.63-7.28a9.95 9.95 0 0 0 .34 9.64 9.98 9.98 0 0 0 7.1 4.76c.89-1.05 1.67-2.17 2.34-3.34.39-.68-.14-1.49-.92-1.49-1.67.01-3.28-.81-4.23-2.29"
    />
    <path
      fill={props.color || "currentColor"}
      d="M8.57 12c0 .61.15 1.18.46 1.72a3.44 3.44 0 0 0 2.96 1.71c1.22 0 2.36-.66 2.96-1.71.31-.54.47-1.11.47-1.72 0-1.89-1.54-3.42-3.43-3.42-1.88-.01-3.42 1.53-3.42 3.42"
    />
    <path
      fill={props.color || "currentColor"}
      d="M21.34 8.42a21.5 21.5 0 0 0-4.14-.47c-.79-.01-1.24.85-.85 1.54.4.71.63 1.53.63 2.4 0 .84-.22 1.67-.63 2.41-.94 2.88-2.34 5.44-4.19 7.7 5.45-.09 9.84-4.53 9.84-10 0-1.26-.23-2.47-.66-3.58"
    />
  </svg>
);
export default SvgBold;