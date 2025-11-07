import { StarOutlined, UserOutlined } from "@ant-design/icons";
import type { IAppMenuItem } from "./types/IAppMenuItem";

export const APP_ROUTES = {
  RANDOM_USERS: "/",
  SAVED_USERS: "/saved",
} as const;

export const APP_MENU: IAppMenuItem[] = [
  { route: APP_ROUTES.RANDOM_USERS, label: "Users", icon: <UserOutlined /> },
  { route: APP_ROUTES.SAVED_USERS, label: "Saved", icon: <StarOutlined /> },
] as const;
