import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import RoomServiceRepo from '../src/RoomServiceRepo';
import data from '../src/data-sample';
import domUpdates from "../src/domUpdates";
// chai.spy.on(domUpdates, 'domRoomsAvailable', () => true);
// chai.spy.on(domUpdates, 'domPercentageRoomsOccupied', () => true);


describe('RoomServiceRepo', function() {

  let roomServiceRepo;
  beforeEach(function() {
    roomServiceRepo = new RoomServiceRepo(data.roomServices, '31/05/2019');
  })

  it('should be a function', function() {
    expect(RoomServiceRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(roomServiceRepo).to.be.an.instanceOf(RoomServiceRepo);
  });

  it('todayTotalIncome should return total of todays income',
    function() {
      expect(roomServiceRepo.todayTotalIncome()).to.equal(9.48);
    });
  
  // it('percentageRoomReposOccupied should return percentage of accupied rooms', function() {
  //   expect(roomRepo.percentageRoomsOccupied()).to.equal(0.5);
  // });

});