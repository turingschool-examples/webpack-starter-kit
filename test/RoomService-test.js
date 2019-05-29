import chai from 'chai';
const expect = chai.expect;
import RoomServiceRepo from '../src/RoomServiceRepo.js';
import roomServiceData from '../data/roomServiceData.js';

describe('RoomService', function () {
  let roomServiceRepo;

  beforeEach(function () {
    roomServiceRepo = new RoomServiceRepo(roomServiceData);
  });

  it('should have default properties', function () {
    expect(roomServiceRepo.returnUserRoomService(97).data.length).to.equal(3);  
  });

  it('Should be able to return all room services', function () {
    expect(roomServiceRepo.returnUserRoomService(97).returnAllRoomServices().length).to.equal(3);
  });

  it('Should be able to return the total amount spent on a given day', function() {
    expect(roomServiceRepo.returnUserRoomService(97).returnDailyTotalSpent('22/10/2019')).to.equal(43.4);
  });

  it('Should return the total spent all time by user', function() {
    expect(roomServiceRepo.returnUserRoomService(97).returnAllTimeTotalSpent()).to.equal(43.4);
  });
});