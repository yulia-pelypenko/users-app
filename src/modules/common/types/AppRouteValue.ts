import type { APP_ROUTES } from "../consts";

export type AppRouteValue = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
