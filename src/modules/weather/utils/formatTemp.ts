export const formatTemp = (temp: number): string => {
  const roundedTemp = Math.round(temp);
  const sign = roundedTemp > 0 ? "+" : "";
  return `${sign}${roundedTemp} °C`;
}
 