import { UserOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import type { FC } from "react";

const { Title } = Typography;

interface UsersAppLogoProps {
  size?: number;
  color?: string;
}

export const UsersAppLogo: FC<UsersAppLogoProps> = ({
  size = 40,
  color = "#000",
}) => {
  return (
    <Flex vertical align="center" justify="center">
      <UserOutlined style={{ fontSize: size, color }} />
      <Title
        style={{
          color,
          fontSize: size * 0.8,
        }}
        level={4}
      >
        User App
      </Title>
    </Flex>
  );
};
