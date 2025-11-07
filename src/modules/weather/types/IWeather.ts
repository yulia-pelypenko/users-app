export interface IWeather {
  temperature: number;
  minTemp: number;
  maxTemp: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  isDay: boolean;
}