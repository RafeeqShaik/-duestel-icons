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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
    <path
      fill={props.color || "currentColor"}
      d="M12 16.25A4.26 4.26 0 0 1 7.75 12 4.26 4.26 0 0 1 12 7.75 4.26 4.26 0 0 1 16.25 12 4.26 4.26 0 0 1 12 16.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25M17 7.5c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.17-.21-.22-.33A1 1 0 0 1 16 6.5c0-.13.02-.26.07-.38.06-.13.13-.23.22-.33.05-.04.1-.09.15-.12q.09-.06.18-.09a1.006 1.006 0 0 1 1.09.21c.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08"
    />
  </svg>
);
export default SvgOutline;