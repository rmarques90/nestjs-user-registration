import { User } from './entities/user';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
