import chai from 'chai';
const expect = chai.expect;
import RoomServiceRepo from '../src/RoomServiceRepo.js';
import roomServiceData from '../data/roomServiceData.js';

describe('RoomServiceRepo', function () {
  let roomServiceRepo;

  beforeEach(function () {
    roomServiceRepo = new RoomServiceRepo(roomServiceData);
  });

  it('should have default properties', function () {
    expect(roomServiceRepo.data.roomServices.length).to.equal(100);
  });

  it('Should be able to return a new RoomService with a given id', function () {
    expect(roomServiceRepo.returnUserRoomService(97).data.length).to.equal(3);
  });

  it('Should be able to return all orders on a given date', function() {
    expect(roomServiceRepo.returnAllDailyRoomService('22/10/2019').length).to.equal(3);
  });
});