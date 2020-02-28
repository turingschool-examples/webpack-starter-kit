import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User;
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });
});
