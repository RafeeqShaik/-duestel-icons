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
      d="M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72L12 21.7c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13"
      opacity={0.4}
    />
    <path
      fill={props.color || "currentColor"}
      d="M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.8 6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72-.75.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75-.72-.73a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.72.72.7-.7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06"
    />
  </svg>
);
export default SvgBulk;