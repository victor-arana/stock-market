import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('test','abc',5,4)).toBeTruthy();
  });
});
