import type { ReactNode } from "react";
import { APP_ROUTES } from "../consts"

type AppRouteValue = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];

export interface IAppMenuItem {
  route: AppRouteValue;
  label: string;
  icon?: ReactNode;
}