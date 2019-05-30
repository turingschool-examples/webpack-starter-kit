import chai from 'chai';
const expect = chai.expect;
import BookingRepo from '../src/BookingRepo.js';
import bookingData from '../data/bookingData.js';

describe('Booking', function () {
  let bookingRepo;

  beforeEach(function () {
    bookingRepo = new BookingRepo(bookingData);
  });

  it('should have default properties', function () {
    expect(bookingRepo.returnBooking(2).data.length).to.equal(2);
  });

  it('Should be able to return all bookings', function () {
    expect(bookingRepo.returnBooking(2).returnAllBookings().length).to.equal(2);
  });
});