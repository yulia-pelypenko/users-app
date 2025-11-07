import { Card, Flex, Typography, Avatar, Space, Divider} from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import type { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import type { IUser } from "../../types/IUser";
import { WeatherInfo } from "@/modules/weather/components";

const { Text, Title } = Typography;

interface UserCardProps {
  user: IUser;
  actions: ReactNode[];
}

export const UserCard: FC<UserCardProps> = ({ user, actions }) => {
  const { fullName, gender, picture, email, location, latitude, longitude } =
    user;
  const isMale = gender === "male";

  return (
    <Card className={styles.card} actions={actions} size="small" type="inner">
      <Flex vertical align="stretch" gap={20}>
        <Flex vertical align="center" justify="center">
          <Avatar src={picture} size={100} />
        </Flex>

        <Flex justify="center">
          <Title level={3} ellipsis>
            {fullName}
          </Title>
        </Flex>

        <Flex className={styles.userInfo} vertical>
          <Space size={6}>
            {isMale ? <ManOutlined /> : <WomanOutlined />}
            <Text>{gender}</Text>
          </Space>

          <Space size={6}>
            <MailOutlined />
            <Text copyable>{email}</Text>
          </Space>

          <Space size={6}>
            <EnvironmentOutlined />
            <Text>{location}</Text>
          </Space>
        </Flex>
        <Divider className={styles.divider} />
        <Flex justify="center" className={styles.weatherBlock}>
          <WeatherInfo latitude={latitude} longitude={longitude} />
        </Flex>
      </Flex>
    </Card>
  );
};
