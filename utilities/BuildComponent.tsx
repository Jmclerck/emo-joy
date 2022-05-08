import {
  AllHTMLAttributes,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactDOM,
  ReactHTML,
  ReactSVG,
  SVGAttributes,
  createElement,
} from "react";

import { ComponentMap } from "@utilities/ComponentMap";
import { valueOf } from "@utilities/types";

interface Props {
  component: keyof ReactDOM | valueOf<typeof ComponentMap>;
  props?:
    | AllHTMLAttributes<keyof ReactHTML>
    | SVGAttributes<keyof ReactSVG>
    | ComponentPropsWithoutRef<valueOf<typeof ComponentMap>>;
}

const BuildComponent = ({
  children,
  component,
  props,
}: PropsWithChildren<Props>) => createElement(component, props, children);

export { BuildComponent };
