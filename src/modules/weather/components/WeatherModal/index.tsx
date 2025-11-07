import { Modal, Flex, Typography, Divider, Spin, Image } from "antd";
import { useWeather } from "../../hooks/useWeather";
import { getWeatherIconUrl } from "../../utils/getWeatherIconUrl";
import { WindCompass } from "../WindCompass";
import { formatTemp } from "../../utils/formatTemp";
import styles from "./styles.module.scss";
import type { FC } from "react";

const { Title, Text } = Typography;

interface WeatherModalProps {
  open: boolean;
  onClose: () => void;
  latitude: number;
  longitude: number;
}

export const WeatherModal: FC<WeatherModalProps> = ({
  open,
  onClose,
  latitude,
  longitude,
}) => {
  const { data: weather, isFetching } = useWeather(latitude, longitude);

  if (!weather) return null;

  const {
    temperature,
    minTemp,
    maxTemp,
    windSpeed,
    windDirection,
    weatherCode,
    isDay,
  } = weather;

  return (
    <Modal
      className={styles.modal}
      title="Current weather"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={320}
    >
      <Flex vertical align="center" gap={12}>
        {isFetching && <Spin size="default" />}

        <Image
          src={getWeatherIconUrl(weatherCode, isDay)}
          alt="weather icon"
          width={100}
          height={100}
          preview={false}
        />

        <Title level={2}>{formatTemp(temperature)}</Title>

        <Text type="secondary">{isDay ? "Daytime" : "Nighttime"}</Text>

        <Divider />

        <Flex justify="center" gap={45} className={styles.tempRow}>
          <Flex vertical align="center">
            <Text strong>Min temp</Text>
            <Text>{formatTemp(minTemp)}</Text>
          </Flex>
          <Flex vertical align="center">
            <Text strong>Max temp</Text>
            <Text>{formatTemp(maxTemp)}</Text>
          </Flex>
        </Flex>

        <Divider />

        <WindCompass direction={windDirection} speed={windSpeed} />
      </Flex>
    </Modal>
  );
};
