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
  color = "#fff",
}) => {
  return (
    <Flex align="center" justify="center" gap={6}>
      <UserOutlined style={{ fontSize: size, color }} />
      <Title
        style={{
          margin: 0,
          color,
          fontSize: size * 0.8,
        }}
        level={4}
      >
        Users App
      </Title>
    </Flex>
  );
};
