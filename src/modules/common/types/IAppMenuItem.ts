import type { ReactNode } from "react";
import type { AppRouteValue } from "./AppRouteValue";

export interface IAppMenuItem {
  route: AppRouteValue;
  label: string;
  icon?: ReactNode;
}