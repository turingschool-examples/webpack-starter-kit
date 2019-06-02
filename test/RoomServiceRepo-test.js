import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import RoomServiceRepo from '../src/RoomServiceRepo';
import data from '../src/data-sample';
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'domTodayTotalIncome', () => true);
chai.spy.on(domUpdates, 'domAllServicesOfOneDay', () => true);


describe('RoomServiceRepo', function() {

  let roomServiceRepo;
  beforeEach(function() {
    roomServiceRepo = new RoomServiceRepo(data.roomServices, '01/06/2019', '');
  })

  it('should be a function', function() {
    expect(RoomServiceRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(roomServiceRepo).to.be.an.instanceOf(RoomServiceRepo);
  });

  it('todayTotalIncome should return total of todays income',
    function() {
      expect(roomServiceRepo.todayTotalIncome('01/06/2019')).to.equal(32.03);
    });
  
  it('allServicesOfOneDay should return all services of one day', function() {
    expect(roomServiceRepo.allServicesOfOneDay()).to.eql({
      'Generic Plastic Sandwich': [ 2, 18.96 ],
      'Tasty Fresh Sandwich': [ 1, 13.07 ] });
  });

});