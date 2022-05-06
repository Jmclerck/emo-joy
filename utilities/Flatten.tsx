import { Container } from "@utilities/Container";
import { ElementDefinition } from "@utilities/ComponentMap";

interface Props {
  children?: Array<ElementDefinition>;
}

const Flatten = ({ children }: Props) => {
  if (Array.isArray(children)) {
    return <Container>{children}</Container>;
  } else if (children) {
    return children;
  } else {
    return null;
  }
};

export { Flatten };
