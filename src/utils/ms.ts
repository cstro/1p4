import round from '@/utils/round';

export default function ms(value: number, base: number, scale: number) {
  const result = (scale ** value) * base;
  return round(result, 2);
}
