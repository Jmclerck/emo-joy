import { ReactHTML } from "react";

import { ComponentMap, ElementDefinition } from "@utilities/ComponentMap";
import { keyOf, valueOf } from "helpers";
import { BuildComponent } from "@utilities/BuildComponent";
import { Flatten } from "@utilities/Flatten";

interface Props {
  children?: Array<ElementDefinition>;
}

function Container(props: Props) {
  return (
    <>
      {props.children?.map(({ children, name, props }, idx) => {
        let component: keyof ReactHTML | valueOf<typeof ComponentMap>;

        if (name in ComponentMap) {
          component = ComponentMap[name as keyOf<typeof ComponentMap>];
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
