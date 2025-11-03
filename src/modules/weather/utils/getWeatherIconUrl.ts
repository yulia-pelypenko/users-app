const weatherIconsMap: Record<number, { day: string; night: string }> = {
  0: { day: "http://openweathermap.org/img/wn/01d@2x.png", night: "http://openweathermap.org/img/wn/01n@2x.png" },
  1: { day: "http://openweathermap.org/img/wn/01d@2x.png", night: "http://openweathermap.org/img/wn/01n@2x.png" },
  2: { day: "http://openweathermap.org/img/wn/02d@2x.png", night: "http://openweathermap.org/img/wn/02n@2x.png" },
  3: { day: "http://openweathermap.org/img/wn/03d@2x.png", night: "http://openweathermap.org/img/wn/03n@2x.png" },
  45: { day: "http://openweathermap.org/img/wn/50d@2x.png", night: "http://openweathermap.org/img/wn/50n@2x.png" },
  48: { day: "http://openweathermap.org/img/wn/50d@2x.png", night: "http://openweathermap.org/img/wn/50n@2x.png" },
  51: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  53: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  55: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  61: { day: "http://openweathermap.org/img/wn/10d@2x.png", night: "http://openweathermap.org/img/wn/10n@2x.png" },
  63: { day: "http://openweathermap.org/img/wn/10d@2x.png", night: "http://openweathermap.org/img/wn/10n@2x.png" },
  65: { day: "http://openweathermap.org/img/wn/10d@2x.png", night: "http://openweathermap.org/img/wn/10n@2x.png" },
  71: { day: "http://openweathermap.org/img/wn/13d@2x.png", night: "http://openweathermap.org/img/wn/13n@2x.png" },
  73: { day: "http://openweathermap.org/img/wn/13d@2x.png", night: "http://openweathermap.org/img/wn/13n@2x.png" },
  75: { day: "http://openweathermap.org/img/wn/13d@2x.png", night: "http://openweathermap.org/img/wn/13n@2x.png" },
  80: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  81: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  82: { day: "http://openweathermap.org/img/wn/09d@2x.png", night: "http://openweathermap.org/img/wn/09n@2x.png" },
  95: { day: "http://openweathermap.org/img/wn/11d@2x.png", night: "http://openweathermap.org/img/wn/11n@2x.png" },
  96: { day: "http://openweathermap.org/img/wn/11d@2x.png", night: "http://openweathermap.org/img/wn/11n@2x.png" },
  99: { day: "http://openweathermap.org/img/wn/11d@2x.png", night: "http://openweathermap.org/img/wn/11n@2x.png" },
};

export function getWeatherIconUrl(code: number, isDay: number | boolean): string {
  const iconSet = weatherIconsMap[code] ?? weatherIconsMap[0];
  return isDay ? iconSet.day : iconSet.night;
}