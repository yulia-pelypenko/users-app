import { Layout, Flex } from "antd";
import { getCurrentFullYear } from "../../utils/getCurrentFullYear";
import { UsersAppLogo } from "../UsersAppLogo";
import { Nav } from "../Nav";
import styles from "./styles.module.scss";

const { Header, Content, Footer } = Layout;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={styles.layout}>
      <Header>
        <Flex justify="space-between">
          <UsersAppLogo size={25} />
          <Nav />
        </Flex>
      </Header>

      <Content>{children}</Content>

      <Footer className={styles.footer}>
        <Flex vertical align="center" justify="center" gap={8}>
          <UsersAppLogo size={20} />
          <span>{getCurrentFullYear()}</span>
        </Flex>
      </Footer>
    </Layout>
  );
};
