import { APP_ROUTES } from "../common/consts";
import type { IModulePage } from "../common/types/IModulePage";
import { RandomUsersPage, SavedUsersPage } from "./pages";

const UsersPages: IModulePage[] = [
  {
    component: RandomUsersPage,
    route: APP_ROUTES.RANDOM_USERS
  },
  {
    component: SavedUsersPage,
    route: APP_ROUTES.SAVED_USERS
  }
]

export default UsersPages;