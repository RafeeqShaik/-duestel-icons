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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M6.47 9.28a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.71-.71-1.87-.71-2.58 0-.29.3-.77.3-1.06 0m9.13 8.8H8.4c-.7 0-1.27-.57-1.27-1.28 0-2.69 2.19-4.88 4.88-4.88s4.88 2.19 4.88 4.88c-.01.7-.59 1.28-1.29 1.28m1.93-8.8c-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.3.29.77 0 1.06"
    />
  </svg>
);
export default SvgBold;