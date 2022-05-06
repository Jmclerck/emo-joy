import { ReactHTML } from "react";

export interface ElementDefinition {
  children?: Array<ElementDefinition>;
  name: keyof ReactHTML;
  props: any;
}
