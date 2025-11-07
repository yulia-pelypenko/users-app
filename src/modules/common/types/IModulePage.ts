import type { ComponentType } from "react";
import type { AppRouteValue } from "./AppRouteValue";


export interface IModulePage {
  component: ComponentType,
  route: AppRouteValue,
}
