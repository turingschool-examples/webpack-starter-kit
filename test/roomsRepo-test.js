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

})