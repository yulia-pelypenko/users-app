import { Layout, Flex } from "antd";
import { getCurrentFullYear } from "../../utils/getCurrentFullYear";
import { UsersAppLogo } from "../UsersAppLogo";
import { Nav } from "../Nav";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.Header}>
        <Flex justify="space-between">
          <UsersAppLogo size={25} />
          <Nav />
        </Flex>
      </Header>

      <Content className={styles.content}><Outlet /></Content>

      <Footer className={styles.footer}>
        <Flex vertical align="center" justify="center" gap={8}>
          <UsersAppLogo size={20} />
          <span>{getCurrentFullYear()}</span>
        </Flex>
      </Footer>
    </Layout>
  );
};
