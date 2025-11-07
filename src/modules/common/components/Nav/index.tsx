import { Menu } from "antd";
import { APP_MENU } from "../../consts";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Nav = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  const handleClick = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <Menu
      className={styles.menu}
      mode="horizontal"
      theme="dark"
      selectedKeys={[selectedKey]}
      items={APP_MENU.map(({ route, label, icon }) => ({
        key: route,
        label: (
          <Link to={route} onClick={() => handleClick(route)}>
            {label}
          </Link>
        ),
        icon,
      }))}
    />
  );
};
