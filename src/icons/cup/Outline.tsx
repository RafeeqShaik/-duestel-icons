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
      d="M12.15 19.35c-.41 0-.75-.34-.75-.75v-2.1c0-.41.34-.75.75-.75s.75.34.75.75v2.1c0 .41-.34.75-.75.75"
    />
    <path
      fill={props.color || "currentColor"}
      d="M17.9 22.75H6.4V21c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75zm-10-1.5h8.5V21c0-.69-.56-1.25-1.25-1.25h-6c-.69 0-1.25.56-1.25 1.25z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M18.15 22.75h-12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75M18.43 12.44c-.21 0-.42-.09-.57-.26a.74.74 0 0 1-.12-.79c.34-.78.51-1.61.51-2.48v-3c0-.35-.06-.69-.18-1.05-.01-.03-.02-.07-.03-.11-.03-.15-.04-.3-.04-.44 0-.41.34-.75.75-.75h.6c1.79 0 3.25 1.5 3.25 3.35 0 1.53-.63 3.04-1.72 4.13-.02.02-.08.07-.09.08-.59.49-1.26 1.04-2.16 1.29-.07.02-.13.03-.2.03m1.25-7.35c.05.27.07.55.07.82v3c0 .41-.03.8-.09 1.2l.17-.14c.8-.8 1.27-1.92 1.27-3.06 0-.9-.61-1.66-1.42-1.82M5.58 12.4a.6.6 0 0 1-.23-.04c-.82-.26-1.59-.74-2.23-1.38C1.97 9.71 1.4 8.32 1.4 6.85c0-1.82 1.43-3.25 3.25-3.25h.65c.25 0 .49.13.63.34s.16.48.06.71c-.16.36-.24.77-.24 1.2v3c0 .86.17 1.7.52 2.5.12.27.06.58-.13.8-.15.16-.35.25-.56.25M4.3 5.13c-.81.16-1.4.86-1.4 1.72 0 1.09.44 2.14 1.31 3.1.04.05.09.09.14.13-.07-.41-.1-.82-.1-1.23v-3c0-.24.02-.48.05-.72"
    />
    <path
      fill={props.color || "currentColor"}
      d="M12 16.75c-4.27 0-7.75-3.48-7.75-7.75V6c0-2.62 2.13-4.75 4.75-4.75h6c2.62 0 4.75 2.13 4.75 4.75v3c0 4.27-3.48 7.75-7.75 7.75m-3-14C7.21 2.75 5.75 4.21 5.75 6v3c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25V6c0-1.79-1.46-3.25-3.25-3.25z"
    />
  </svg>
);
export default SvgOutline;