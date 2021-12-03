import sum from "./sum";

describe('sum', () => {
  test('adds two numbers together', () => {
    expect(sum(1, 2)).toEqual(3)
  });
});
