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
      d="M21.76 15.92 15.36 4.4C14.5 2.85 13.31 2 12 2s-2.5.85-3.36 2.4l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99s1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72s.56-2.53-.25-3.99M11.25 9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.46 8.71-.15.12q-.09.06-.18.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02s-.13-.01-.2-.02a.6.6 0 0 1-.18-.06.8.8 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.13-.03.27-.03.39 0 .07.01.13.03.19.06q.09.03.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71"
    />
  </svg>
);
export default SvgBold;