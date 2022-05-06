import { PropsWithChildren, ReactHTML, createElement } from "react";
import { ValueOfComponentMap } from "./ComponentMap";

interface Props {
  component: keyof ReactHTML | ValueOfComponentMap;
  props: any;
}

const BuildComponent = ({
  children,
  component,
  props,
}: PropsWithChildren<Props>) => {
  return createElement(component, props, children);
};

export { BuildComponent };
