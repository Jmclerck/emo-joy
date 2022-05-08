import {
  AllHTMLAttributes,
  ReactDOM,
  ReactHTML,
  ReactSVG,
  SVGAttributes,
} from "react";

import Cat from "@components/Cat";
import Dog from "@components/Dog";
import Robot from "@components/Robot";

import { keyOf } from "helpers";

export interface ElementDefinition {
  children?: Array<ElementDefinition>;
  name: keyOf<typeof ComponentMap> | keyof ReactDOM;
  props?: AllHTMLAttributes<keyof ReactHTML> | SVGAttributes<keyof ReactSVG>;
}

const ComponentMap = {
  Cat,
  Dog,
  Robot,
} as const;

export { ComponentMap };
