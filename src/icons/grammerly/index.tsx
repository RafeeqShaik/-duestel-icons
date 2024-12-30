import React, { JSX, SVGProps } from "react";

import Bold from "./Bold";
import Broken from "./Broken";
import Bulk from "./Bulk";
import Linear from "./Linear";
import Outline from "./Outline";
import Twotone from "./Twotone";

type variant = "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";

type IconProps = {
  variant?: variant;
} & ((SVGProps<SVGSVGElement> & { size?: string | number; color?: string }) & {
  size?: string | number;
  color?: string;
});

const components: Record<variant, (props: IconProps) => JSX.Element> = {
  bold: Bold,
  broken: Broken,
  bulk: Bulk,
  linear: Linear,
  outline: Outline,
  twotone: Twotone,
};

const Grammerly = ({ variant = "outline", ...rest }: IconProps) => {
  const Slot = components[variant];
  return <Slot {...rest} />;
};

export default Grammerly;
