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
      d="M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23"
    />
    <path
      fill={props.color || "currentColor"}
      d="M16.24 13.01c-.19 0-.38-.07-.52-.21a5.9 5.9 0 0 0-1.56-1.1c-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01s-.28-.77.01-1.06c.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.745.745 0 0 1-.52 1.28M12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41c-.2.19-.45.29-.71.29"
    />
  </svg>
);
export default SvgBulk;