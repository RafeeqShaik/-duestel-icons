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
      d="M8.82 4.9 7.54 2.78C7.06 2 6.11 1.56 5.22 1.82c-1.34.4-1.86 1.91-1.19 3.02l1.32 2.17c.15.23.46.31.69.17l2.61-1.59c.24-.15.32-.46.17-.69M19.74 14.21l-2.81-3.8c-.98-1.32-2.68-1.94-4.28-1.51 0-.01-.01-.01-.01-.02l-1.66-2.73c-.3-.47-.92-.62-1.39-.33L6.12 7.93c-.48.28-.63.91-.34 1.39l1.65 2.73s0 .01.01.01a4.05 4.05 0 0 0-.61 4.51l2.08 4.24c.64 1.31 2.15 1.81 3.43 1.15.1-.05.13-.17.07-.27l-1.56-2.58a.765.765 0 0 1 .25-1.05c.36-.21.82-.1 1.05.25l1.57 2.58c.06.09.18.12.27.07l.96-.58c.09-.06.12-.18.07-.27l-1.57-2.58c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25l1.57 2.58c.06.09.18.12.27.07l.96-.58c.09-.06.12-.18.07-.27l-1.57-2.58c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25l1.58 2.57c.06.09.18.12.27.06 1.16-.83 1.42-2.39.54-3.57"
    />
  </svg>
);
export default SvgBold;
