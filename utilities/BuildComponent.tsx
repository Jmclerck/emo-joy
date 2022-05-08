import { PropsWithChildren, ReactHTML, createElement } from "react";

import { ComponentMap } from "@utilities/ComponentMap";
import { valueOf } from "helpers";

interface Props {
  component: keyof ReactHTML | valueOf<typeof ComponentMap>;
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
