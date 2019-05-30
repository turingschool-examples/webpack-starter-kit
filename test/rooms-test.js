import chai from 'chai';
const expect = chai.expect;

import roomsData from '../Data/rooms-data'
import Room from '../src/rooms'
import bookingData from '../Data/booking-data'

describe.skip('Room', function() {
  let room;
  beforeEach(function() {
    room = new Room(roomsData)
  })

  it('should be a function', function() {
    expect(Room).to.be.a('function')
  })

  it('Should be an instance of the Room class', function() {
    expect(room).to.be.an.instanceOf(Room)
  })

  it('should be able to take data in as a parameter',  function() {
    expect(room.data.length).to.equal(200)
  })

  it('should be able to find a room by room number', function() {
    expect(room.findByNumber(195)).to.deep.equal({
      number: 195,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 169.93
    })
  })

  it('should be able to find all the rooms by type', function() {
    expect(room.filterByType('junior suite').length).to.equal(38)
  })

  it('should display if there are rooms available by type on a specific date', function() {
    expect(room.availableTypeByDate('29/09/2019', 'junior suite', bookingData).length).to.equal(37)
  })

  it('should return all available rooms by date', function() {
    expect(room.availableByDate('29/09/2019', bookingData).length).to.equal(196)
  })

  it('should return all other rooms available if one type is not', function() {
    expect(room.availableAlternate('29/09/2019', 'junior suite', bookingData).length).to.equal(37)
  })
})