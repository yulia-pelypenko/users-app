import { StarOutlined, UserOutlined } from "@ant-design/icons";
import type { IAppMenuItem } from "./type/IAppMenuItem";

export const APP_ROUTES = {
  USERS: "/",
  SAVED: "/saved",
} as const;

export const APP_MENU: IAppMenuItem[] = [
  { route: APP_ROUTES.USERS, label: 'Users', icon:  <UserOutlined/>},
  { route: APP_ROUTES.SAVED, label: 'Saved', icon: <StarOutlined /> },
] as const;;