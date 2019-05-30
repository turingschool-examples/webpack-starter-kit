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
})