import {expect} from 'chai'
import Room from '../src/classes/Room.js';
import roomsSample from '../src/data/rooms-sample.js';

describe('Room tests', function() {
  let room2, room6, room10;

  this.beforeEach('instantiate rooms', () => {
    room2 = new Room(roomsSample[1]);
    room6 = new Room(roomsSample[5]);
    room10 = new Room(roomsSample[9]);
  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', () => {
    expect(room2).to.be.an.instanceOf(Room);
    expect(room6).to.be.an.instanceOf(Room);
    expect(room10).to.be.an.instanceOf(Room);
  });

  it('should have a number', () => {
    expect(room2.number).to.equal(2);
    expect(room6.number).to.equal(6);
    expect(room10.number).to.equal(10);
  });

  it('should have a type', () => {
    expect(room2.roomType).to.equal('suite');
    expect(room6.roomType).to.equal('junior suite');
    expect(room10.roomType).to.equal('suite');
  });

  it('should be able to have or not have a bidet', () => {
    expect(room2.bidet).to.equal(false)
    expect(room6.bidet).to.equal(true)
    expect(room10.bidet).to.equal(false)
  });

  it('should have a bed size', () => {
    expect(room2.bedSize).to.equal('full');
    expect(room6.bedSize).to.equal('queen');
    expect(room10.bedSize).to.equal('twin');
  });

  it('should have a number of beds', () => {
    expect(room2.numBeds).to.equal(2);
    expect(room6.numBeds).to.equal(1);
    expect(room10.numBeds).to.equal(1);
  });

  it('should have a cost per night', () => {
    expect(room2.costPerNight).to.equal(477.38);
    expect(room6.costPerNight).to.equal(397.02);
    expect(room10.costPerNight).to.equal(497.64);
  });

  it('should convert room type to matching image endpath', () => {
    expect(room2.getImageEndPath()).to.equal('suite.jpeg');
    expect(room6.getImageEndPath()).to.equal('junior-suite.jpeg');
  });

  it('should convert room type to room name', () => {
    expect(room6.getRoomName()).to.equal('Junior Suite');
    expect(room10.getRoomName()).to.equal('Suite');
  });

  it('should be able to capitalize bed size for DOM', () => {
    expect(room2.getBedSize()).to.equal('Full');
    expect(room6.getBedSize()).to.equal('Queen');
    expect(room10.getBedSize()).to.equal('Twin');
  });
});