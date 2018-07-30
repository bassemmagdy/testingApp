import { greet } from './greet';
describe('greet', () => {
  it('should return greet + name', () => {
    // expect(greet('bassem')).toContain('bassem');
    expect(greet('bassem')).toBe('Welcome bassem');
  });
});
