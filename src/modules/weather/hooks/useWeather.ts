import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/weather.service";
import { config } from "@/modules/common/config";


export const useWeather = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeather(latitude, longitude),
    staleTime: config.weather.staleTime,
    refetchInterval: config.weather.refetchInterval,
  });
};