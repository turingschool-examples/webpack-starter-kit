import chai from 'chai';
const expect = chai.expect;
import RoomsRepo from '../src/roomsRepo';
import Data from '../src/Data';

describe('Rooms Repo', function() {
  let rooms;
  beforeEach(function() {
    rooms = new RoomsRepo(Data)
  })

  it('should be a function', function() {
    expect(RoomsRepo).to.be.a('function')
  });

  it('should be an instance of Rooms Repo', function() {
    expect(rooms).to.be.an.instanceOf(RoomsRepo)
  });

  it('should find and display the most popular booking date', function() {
    expect(rooms.findMostPopBookingDate()).to.eql(['07/10/2019'])
  });

  it('should filter rooms by type', function() {
    expect(rooms.filterRoomType('residential suite').length).to.equal(4)
  });

  it('should find all available rooms', function() {
    expect(rooms.findAvailableRooms('18/07/2019').length).to.equal(9)
  });

  it('should filter rooms by date and type', function() {
    expect(rooms.filterRoomsByDate('18/07/2019', 'residential suite').length).equal(4)
  });

  it('should add a new reservation', function() {
    rooms.addNewBooking({
      userID: 52,
      date: "14/07/2019",
      roomNumber: 16
      })
    expect(rooms.data.bookings.bookings.length).to.equal(11)
  })

})