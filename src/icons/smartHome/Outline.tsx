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
      d="M17.6 22.56h-6.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.8-.64-2.13-.64-2.92-.01L3.61 8.95c-.57.46-.96 1.48-.84 2.2l.28 1.69c.07.41-.21.8-.62.86-.41.08-.79-.21-.86-.62l-.28-1.68c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2M5 22.75c-.41 0-.74-.33-.75-.73-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1-.73-.77c.01-.41.34-.73.75-.73h.02c2.15.05 3.69 1.58 3.73 3.73.01.41-.32.76-.73.77z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M8 22.75c-.41 0-.75-.33-.75-.74-.01-.66-.12-1.29-.32-1.88-.51-1.46-1.6-2.54-3.06-3.06-.59-.21-1.22-.32-1.88-.32-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01c.83.01 1.62.15 2.36.41 1.89.67 3.3 2.08 3.97 3.97.26.74.4 1.54.41 2.36 0 .42-.33.76-.75.76.01 0 0 0 0 0M2 23c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
    />
  </svg>
);
export default SvgOutline;