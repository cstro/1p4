import ms from '@/utils/ms';

const cases = [
  [0, 16, 1.5, 16],
  [1, 16, 1.5, 24],
  [2, 16, 1.5, 36],

  [0, 11, 1.2, 11],
  [1, 11, 1.2, 13.2],
  [2, 11, 1.2, 15.84],

  [0, 20, 1.6, 20],
  [-1, 20, 1.6, 12.5],
  [-2, 20, 1.6, 7.81],
];

describe('ms util', () => {
  it.each(cases)(
    'given value %p, base %p and scale $p, returns $p', (
      value, base, scale, result,
    ) => {
      expect(ms(value, base, scale)).toBe(result);
    },
  );
});
