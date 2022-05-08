import {
  AllHTMLAttributes,
  PropsWithChildren,
  ReactDOM,
  ReactHTML,
  ReactSVG,
  SVGAttributes,
  createElement,
} from "react";

import { ComponentMap } from "@utilities/ComponentMap";
import { valueOf } from "helpers";

interface Props {
  component: keyof ReactDOM | valueOf<typeof ComponentMap>;
  props?: AllHTMLAttributes<keyof ReactHTML> | SVGAttributes<keyof ReactSVG>;
}

const BuildComponent = ({
  children,
  component,
  props,
}: PropsWithChildren<Props>) => {
  return createElement(component, props, children);
};

export { BuildComponent };
