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
      d="M20.01 19.26c-.19 0-.38-.07-.53-.22l-4.95-4.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.95 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <path
      fill={props.color || "currentColor"}
      d="M10.11 18.43c-.73 0-1.43-.29-1.94-.81l-4.24-4.24a2.76 2.76 0 0 1 0-3.89L11 2.42a2.76 2.76 0 0 1 3.89 0l4.24 4.24a2.73 2.73 0 0 1 0 3.88l-7.07 7.07c-.52.54-1.21.82-1.95.82m2.83-15.31c-.32 0-.64.12-.88.37l-7.07 7.07a1.25 1.25 0 0 0 0 1.77l4.24 4.24c.47.47 1.29.47 1.77 0l7.07-7.07a1.234 1.234 0 0 0 0-1.76L13.83 3.5a1.22 1.22 0 0 0-.89-.38M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill={props.color || "currentColor"}
      d="M13.63 15.74c-.19 0-.38-.07-.53-.22L6.03 8.45a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.07 7.07c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgOutline;