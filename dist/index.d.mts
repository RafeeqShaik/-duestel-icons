import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGProps } from 'react';

type variant$1 = "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
type IconProps$1 = {
    variant?: variant$1;
} & ((SVGProps<SVGSVGElement> & {
    size?: string | number;
    color?: string;
}) & {
    size?: string | number;
    color?: string;
});
declare const BatteryEmpty: ({ variant, ...rest }: IconProps$1) => react_jsx_runtime.JSX.Element;

type variant = "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
type IconProps = {
    variant?: variant;
} & ((SVGProps<SVGSVGElement> & {
    size?: string | number;
    color?: string;
}) & {
    size?: string | number;
    color?: string;
});
declare const Trash: ({ variant, ...rest }: IconProps) => react_jsx_runtime.JSX.Element;

export { BatteryEmpty, Trash };
