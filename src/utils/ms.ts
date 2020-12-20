export default function ms(value: number, base: number, scale: number) {
  const result = (scale ** value) * base;
  // Only return value to two decimal places.
  return Math.round(result * 100) / 100;
}
