import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import RoomRepo from '../src/RoomRepo';
import data from '../src/data-sample';
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'domRoomsAvailable', () => true);
chai.spy.on(domUpdates, 'domPercentageRoomsOccupied', () => true);

describe('RoomRepo', function() {

  let roomRepo;
  beforeEach(function() {
    roomRepo = new RoomRepo(data.bookings, data.rooms, '31/05/2019');
  })

  it('should be a function', function() {
    expect(RoomRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(roomRepo).to.be.an.instanceOf(RoomRepo);
  });

  it('roomsAvailable should return numbers of available rooms',
    function() {
      expect(roomRepo.roomsAvailable().length).to.equal(199);
    });
  
  it('percentageRoomReposOccupied should return percentage of accupied rooms', function() {
    expect(roomRepo.percentageRoomsOccupied()).to.equal(0.5);
  });
});