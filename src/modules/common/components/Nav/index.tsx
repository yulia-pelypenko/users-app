import { Menu } from "antd";
import { APP_MENU } from "../../consts";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export const Nav = () => {
  const location = useLocation();

  return (
    <Menu
      className={styles.menu}
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={APP_MENU.map(({ route, label, icon }) => ({
        key: route,
        label: <Link to={route}>{label}</Link>,
        icon: icon,
      }))}
    />
  );
};
