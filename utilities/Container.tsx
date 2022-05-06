import { BuildComponent } from "@utilities/BuildComponent";
import { ElementDefinition } from "@utilities/ComponentMap";
import { Flatten } from "@utilities/Flatten";

interface Props {
  children?: Array<ElementDefinition>;
}

function Container(props: Props) {
  return (
    <>
      {props.children?.map(({ children, name, props }, idx) => (
        <BuildComponent component={name} key={idx} props={props}>
          <Flatten>{children}</Flatten>
        </BuildComponent>
      ))}
    </>
  );
}

export { Container };
