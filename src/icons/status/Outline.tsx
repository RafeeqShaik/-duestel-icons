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
      d="M9.99 22.55c-.05 0-.1 0-.15-.02-3.83-.78-6.94-3.6-8.1-7.34-.12-.4.1-.82.49-.94.4-.12.82.1.94.49 1 3.22 3.67 5.64 6.97 6.31.41.08.67.48.58.89-.07.36-.39.61-.73.61M21.95 11.73c-.38 0-.71-.29-.75-.67A9.22 9.22 0 0 0 12 2.75c-4.77 0-8.72 3.57-9.2 8.3-.04.41-.4.72-.82.67a.75.75 0 0 1-.67-.82C1.87 5.4 6.47 1.25 12 1.25c5.54 0 10.14 4.15 10.69 9.65a.75.75 0 0 1-.67.82c-.02.01-.05.01-.07.01M14.01 22.55c-.35 0-.66-.24-.73-.6-.08-.41.18-.8.58-.88a9.24 9.24 0 0 0 6.96-6.27c.12-.4.55-.62.94-.49.4.12.61.55.49.94a10.76 10.76 0 0 1-8.09 7.29c-.05 0-.1.01-.15.01"
    />
  </svg>
);
export default SvgOutline;