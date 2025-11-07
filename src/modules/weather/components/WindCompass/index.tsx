import { Flex, Typography } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const { Text } = Typography;

interface WindCompassProps {
  direction: number;
  speed: number;
}

export const WindCompass = ({ direction, speed }: WindCompassProps) => {
  return (
    <Flex vertical align="center" gap={8}>
      <div className={styles.compass}>
        {["N", "E", "S", "W"].map((label) => (
          <Text key={label} className={`${styles.label} ${styles[label]}`}>
            {label}
          </Text>
        ))}

        <ArrowUpOutlined
          className={styles.arrow}
          style={{ transform: `rotate(${direction}deg)` }}
        />
      </div>

      <Text className={styles.info}>
        {direction.toFixed(0)}° — {speed?.toFixed(1)} km/h
      </Text>
    </Flex>
  );
};