import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGProps } from 'react';

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

export { Trash };
