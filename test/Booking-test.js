import {expect} from 'chai';
import Booking from '../src/classes/Booking.js';
import bookingsSample from '../src/data/bookings-sample.js';
import roomsSample from '../src/data/rooms-sample.js';

describe('Booking tests', function() {
  let booking1, booking2, booking3;

  beforeEach('instantiate bookings', () => {
    booking1 = new Booking(bookingsSample[5]);
    booking2 = new Booking(bookingsSample[6]);
    booking3 = new Booking(bookingsSample[9]);
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', () => {
    expect(booking1).to.be.an.instanceOf(Booking);
    expect(booking2).to.be.an.instanceOf(Booking);
    expect(booking3).to.be.an.instanceOf(Booking);
  });

  it('should have an ID', () => {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl72u');
    expect(booking2.id).to.equal('5fwrgu4i7k55hl6u0');
    expect(booking3.id).to.equal('5fwrgu4i7k55hl6yo');
  });

  it('should have the ID of the user who booked it', () => {
    expect(booking1.userID).to.equal(3);
    expect(booking2.userID).to.equal(4);
    expect(booking3.userID).to.equal(6);
  });

  it('should have the date of the booking', () => {
    expect(booking1.date).to.equal('2022/02/17');
    expect(booking2.date).to.equal('2023/01/08');
    expect(booking3.date).to.equal('2022/02/08');
  });

  it('should have the number of the booked room', () => {
    expect(booking1.roomNumber).to.equal(4);
    expect(booking2.roomNumber).to.equal(5);
    expect(booking3.roomNumber).to.equal(6);
  });

  it('should get the entire room object', () => {
    const room4 = {
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    };

    const room6 = {
      "number": 6,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 397.02
    };

    expect(booking1.getRoom(roomsSample)).to.deep.equal(room4);
    expect(booking3.getRoom(roomsSample)).to.deep.equal(room6);
  });
});