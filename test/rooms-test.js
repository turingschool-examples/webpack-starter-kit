import chai from 'chai';
const expect = chai.expect;

import roomsData from '../Data/rooms-data'
import Room from '../src/rooms'

describe('Room', function() {
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
})