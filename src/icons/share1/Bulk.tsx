import * as React from "react";
import type { SVGProps } from "react";
const SvgBulk = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || "currentColor"}
      d="M12 3.67v16.66l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-7.2H6.09c-1.4 0-1.79-.86-.86-1.91z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M18.77 12.63 12 20.33V3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76v7.2h3.09c1.4 0 1.79.86.86 1.91"
      opacity={0.4}
    />
  </svg>
);
export default SvgBulk;
