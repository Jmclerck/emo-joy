import { PropsWithChildren, ReactHTML, createElement } from "react";

interface Props {
  component: keyof ReactHTML;
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
