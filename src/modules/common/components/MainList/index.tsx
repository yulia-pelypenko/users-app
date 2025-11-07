import { Flex, List } from "antd";
import styles from "./styles.module.scss";
import Title from "antd/es/typography/Title";
import type { ReactNode } from "react";

interface BaseData {
  id: string | number;
}

interface ListProps<T> {
  data: T[];
  isLoading: boolean;
  title: string;
  emptyText?: string;
  renderItem: (item: T) => ReactNode;
}

export const MainList = <T extends BaseData>({
  data,
  isLoading,
  title,
  emptyText,
  renderItem,
}: ListProps<T>) => {
  const getLimitColumns = (n: number) => Math.min(data.length, n);

  return (
    <Flex
      vertical
      gap={25}
      className={styles.list}
      justify="center"
      align="center"
    >
      <Title className={styles.title} level={1}>
        {title}
      </Title>
        <List
          loading={isLoading}
          dataSource={data}
          locale={{ emptyText: emptyText || "No data found" }}
          grid={{
            gutter: 15,
            xs: 1,
            sm: getLimitColumns(2),
            md: getLimitColumns(3),
            lg: getLimitColumns(4),
            xl: getLimitColumns(4),
            xxl: getLimitColumns(4),
          }}
          renderItem={(item) => (
            <List.Item key={item.id}>
                {renderItem(item)}
            </List.Item>
          )}
        />
    </Flex>
  );
};
