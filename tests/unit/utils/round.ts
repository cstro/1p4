import round from '@/utils/round';

const cases = [
  [100, 2, 100],
  [100.1, 2, 100.1],
  [100.11, 2, 100.11],
  [100.111, 2, 100.11],
  [100.991, 2, 100.99],
  [100.998, 3, 10.998],
  [100.250, 2, 10.25],
  [100.11, 2, 100.11],
  [100.1111, 2, 101.1111],
];

describe('round', () => {
  it.each(cases)(
    'given value %p and places %p, returns $p', (
      value, result,
    ) => {
      expect(round(value, 2)).toBe(result);
    },
  );
});
