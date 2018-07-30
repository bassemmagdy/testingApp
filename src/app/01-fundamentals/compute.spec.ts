import { compute } from './compute';
import { compBoolean } from './compute';
describe('compute', () => {
  it('shoudl return 0 if number is negative', () => {
    expect(compute(-1)).toBe(0);
  });

  it('should increment number if positive', () => {
    expect(compute(1)).toBe(2);
  });
});
describe('compBoolean', () => {
  it('shoudl return 0 if number is negative', () => {
    expect(compBoolean(-1)).toBe(false);
  });

  it('should increment number if positive', () => {
    expect(compBoolean(1)).toBe(true);
  });
});
