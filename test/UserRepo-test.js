import chai from 'chai';
const expect = chai.expect;
import UserRepo from '../src/UserRepo.js';
import userData from '../data/userData.js';

describe('UserRepo', function() {
    let userRepo;

    beforeEach(function () {
      userRepo = new UserRepo(userData);
    });

    it('should have default properties', function () {
      expect(userRepo.data.users.length).to.equal(100);
    });

    it('Should be able to return a user object given a name', function() {
      expect(userRepo.returnUser('Kianna Walter').id).to.equal(17);
    });

  it('Should be able to return a new user object given a name', function () {
    expect(userRepo.createNewUser('Steve Rumizen').id).to.equal(101);
    expect(userRepo.data.users.length).to.equal(101);
  });
});
