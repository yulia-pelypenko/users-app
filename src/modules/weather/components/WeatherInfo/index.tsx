import { Flex, Typography, Image, Space, Spin } from "antd";
import type { FC } from "react";
import { formatTemp } from "../../utils/formatTemp";
import { useWeather } from "../../hooks/useWeather";
import { getWeatherIconUrl } from "../../utils/getWeatherIconUrl";

const { Text, Title } = Typography;

interface WeatherInfoProps {
  latitude: number;
  longitude: number;
}

export const WeatherInfo: FC<WeatherInfoProps> = ({ latitude, longitude }) => {
  const { data: weather, isFetching } = useWeather(latitude, longitude);

  if (isFetching) {
    return <Spin />;
  }

  if (!weather) return null;

  const { temperature, minTemp, maxTemp, weatherCode, isDay } = weather;

  return (
    <Flex align="center" justify="center" gap={10}>
      <Space align="center">
        <Image
          src={getWeatherIconUrl(weatherCode, isDay)}
          alt="Weather icon"
          width={60}
          preview={false}
        />
      </Space>

      <Flex vertical align="center">
        <Title level={3}>{formatTemp(temperature)}</Title>
        <Text type="secondary">
          {formatTemp(minTemp)} / {formatTemp(maxTemp)}
        </Text>
      </Flex>
    </Flex>
  );
};
