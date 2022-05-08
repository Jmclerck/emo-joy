import { ReactHTML } from "react";

import Cat from "@components/Cat";
import Dog from "@components/Dog";
import Robot from "@components/Robot";

import { keyOf } from "helpers";

export interface ElementDefinition {
  children?: Array<ElementDefinition>;
  name: keyOf<typeof ComponentMap> | keyof ReactHTML;
  props?: any;
}

const ComponentMap = {
  Cat,
  Dog,
  Robot,
} as const;

export { ComponentMap };
