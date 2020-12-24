export default function round(number: number, fractionalDigits = 0) {
  return +number.toFixed(fractionalDigits);
}
