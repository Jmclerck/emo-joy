import { ReactHTML } from "react";

import {
  ComponentMap,
  ElementDefinition,
  KeyofComponentMap,
  ValueOfComponentMap,
} from "@utilities/ComponentMap";
import { BuildComponent } from "@utilities/BuildComponent";
import { Flatten } from "@utilities/Flatten";

interface Props {
  children?: Array<ElementDefinition>;
}

function Container(props: Props) {
  return (
    <>
      {props.children?.map(({ children, name, props }, idx) => {
        let component: keyof ReactHTML | ValueOfComponentMap;

        if (name in ComponentMap) {
          component = ComponentMap[name as KeyofComponentMap];
        } else {
          component = name as keyof ReactHTML;
        }

        return (
          <BuildComponent component={component} key={idx} props={props}>
            <Flatten>{children}</Flatten>
          </BuildComponent>
        );
      })}
    </>
  );
}

export { Container };
