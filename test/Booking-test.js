import {expect} from 'chai'
import Booking from '../src/classes/Booking.js';
import bookingsSample from '../src/data/bookings-sample.js';

describe('Booking tests', function() {
  let booking1, booking2, booking3

  beforeEach('instantiate bookings', () => {
    booking1 = new Booking(bookingsSample.bookings[0]);
    booking2 = new Booking(bookingsSample.bookings[6]);
    booking3 = new Booking(bookingsSample.bookings[14]);
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
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6t8');
    expect(booking2.id).to.equal('5fwrgu4i7k55hl6u0');
    expect(booking3.id).to.equal('5fwrgu4i7k55hl74y');
  });

  it('should have the ID of the user who booked it', () => {
    expect(booking1.userID).to.equal(1);
    expect(booking2.userID).to.equal(4);
    expect(booking3.userID).to.equal(10);
  });

  it('should have the date of the booking', () => {
    expect(booking1.date).to.equal('2022/02/05');
    expect(booking2.date).to.equal('2023/01/08');
    expect(booking3.date).to.equal('2022/01/26');
  });

  it('should have the number of the booked room', () => {
    expect(booking1.roomNumber).to.equal(12);
    expect(booking2.roomNumber).to.equal(5);
    expect(booking3.roomNumber).to.equal(17);
  });
});