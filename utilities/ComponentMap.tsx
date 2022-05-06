import { ReactHTML } from "react";

import Cat from "@components/Cat";
import Dog from "@components/Dog";
import Robot from "@components/Robot";

export type KeyofComponentMap = keyof typeof ComponentMap;

export type ValueOfComponentMap =
  typeof ComponentMap[keyof typeof ComponentMap];

export interface ElementDefinition {
  children?: Array<ElementDefinition>;
  name: KeyofComponentMap | keyof ReactHTML;
  props?: any;
}

const ComponentMap = {
  Cat,
  Dog,
  Robot,
} as const;

export { ComponentMap };
