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
      d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
    />
    <path
      fill={props.color || "currentColor"}
      d="M14.82 3.52v5.66l-5.64 5.64v-1.54H6.09c-1.4 0-1.79-.86-.86-1.91L12 3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76M18.77 12.63 12 20.33l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91"
    />
  </svg>
);
export default SvgBold;