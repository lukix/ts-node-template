import add from '../add';

describe('add', () => {
  it('should return a sum of given parameters', () => {
    expect(add(-1, 3)).toEqual(2);
  });
});
