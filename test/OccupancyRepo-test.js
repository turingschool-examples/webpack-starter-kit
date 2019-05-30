import chai from 'chai';
const expect = chai.expect;
import OccupancyRepo from '../src/OccupancyRepo.js';
import roomData from '../data/roomData.js';
import bookingData from '../data/bookingData.js';

describe('OccupancyRepo', function () {
  let occupancyRepo;

  beforeEach(function () {
    occupancyRepo = new OccupancyRepo(roomData, bookingData);
  });

  it('should have default properties', function () {
    expect(occupancyRepo.bookingData.bookings.length).to.equal(200);
    expect(occupancyRepo.roomData.rooms.length).to.equal(200);
  });

  it('Should be able to create an occupancy dataset', function () {
    occupancyRepo.assignOccupancyDataset();
    expect(occupancyRepo.occupancyData.occupancies.length).to.equal(200);
  });

  it('Should be able to return total available rooms by date', function() {
    expect(occupancyRepo.returnAvailableRooms('22/10/2019').length).to.equal(117);
  });

  it('Should be able to return the percentage of occupied rooms given a date', function () {
    expect(occupancyRepo.returnPercentRoomsOccupied('22/10/2019')).to.equal(41.5);
  });

  it('Should be able to return all rooms available for a given date of a given type', function () {
    expect(occupancyRepo.returnAvailableRoomsByType('22/10/2019', 'single room').length).to.equal(38);
  });

  it('Should be able to return the date with the most available rooms', function () {
    expect(occupancyRepo.returnMostAvailableDate()).to.equal('15/02/2020');
  });
});