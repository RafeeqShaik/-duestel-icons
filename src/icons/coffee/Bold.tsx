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
      d="M6 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M10 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M14 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M22.25 13.25c0-2.62-2.03-4.74-4.59-4.96-.74-1.21-2.06-2.03-3.58-2.03H6.71c-2.32 0-4.21 1.89-4.21 4.21V11h15.79v-.53c0-.19-.03-.38-.06-.56 1.45.43 2.52 1.75 2.52 3.34 0 1.57-1.04 2.88-2.46 3.32V12H2.5v5.79C2.5 20.11 4.39 22 6.71 22h7.37c2.2 0 3.99-1.7 4.17-3.86 2.28-.46 4-2.48 4-4.89"
    />
  </svg>
);
export default SvgBold;
