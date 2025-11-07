import { api } from "@/modules/common/api/client";
import type { IWeatherResponse } from "../types/IWeatherResponse";
import type { IWeather } from "../types/IWeather";


export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<IWeather> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&timezone=auto`;

  const { data } = await api.get<IWeatherResponse>(url);

  const current = data.current_weather;
  const temps = data.hourly?.temperature_2m || [];

  const minTemp = temps.length ? Math.min(...temps) : current.temperature;
  const maxTemp = temps.length ? Math.max(...temps) : current.temperature;

  return {
    temperature: current.temperature,
    minTemp,
    maxTemp,
    windSpeed: current.windspeed,
    windDirection: current.winddirection,
    weatherCode: current.weathercode,
    isDay: !!current.is_day,
  };
};


