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
      d="M17 21.04H7c-3.17 0-5.75-2.58-5.75-5.75V5.71c0-1.3.6-1.75.96-1.9s1.1-.26 2.02.66l2.59 2.59c.1.1.26.1.35 0l3.59-3.59c.66-.66 1.82-.66 2.47 0l3.59 3.59c.1.1.26.1.35 0l2.59-2.59c.92-.92 1.66-.8 2.02-.66.36.15.96.59.96 1.9v9.59c.01 3.43-2.3 5.74-5.74 5.74M2.81 5.24c-.03.08-.06.23-.06.47v9.59A4.26 4.26 0 0 0 7 19.55h10c2.58 0 4.25-1.67 4.25-4.25V5.71c0-.24-.03-.38-.06-.46-.08.04-.2.12-.37.29l-2.59 2.59c-.66.66-1.82.66-2.47 0l-3.59-3.59c-.1-.1-.26-.1-.35 0L8.24 8.12c-.66.66-1.82.66-2.47 0L3.18 5.53c-.17-.17-.3-.25-.37-.29"
    />
  </svg>
);
export default SvgOutline;