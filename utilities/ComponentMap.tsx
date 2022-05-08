import {
  AllHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactDOM,
  ReactHTML,
  ReactSVG,
  SVGAttributes,
} from "react";

import { keyOf, valueOf } from "@utilities/types";
import { Cat } from "@components/Cat";
import { Dog } from "@components/Dog";
import { Robot } from "@components/Robot";

export interface ElementDefinition {
  children?: Array<ElementDefinition>;
  name: keyOf<typeof ComponentMap> | keyof ReactDOM;
  props?:
    | AllHTMLAttributes<keyof ReactHTML>
    | SVGAttributes<keyof ReactSVG>
    | ComponentPropsWithoutRef<valueOf<typeof ComponentMap>>;
}

const ComponentMap = {
  Cat,
  Dog,
  Robot,
} as const;

export { ComponentMap };
