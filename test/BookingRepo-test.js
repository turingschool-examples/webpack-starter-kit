import chai from 'chai';
const expect = chai.expect;
import BookingRepo from '../src/BookingRepo.js';
import bookingData from '../data/bookingData.js';

describe('BookingRepo', function () {
  let bookingRepo;

  beforeEach(function () {
    bookingRepo = new BookingRepo(bookingData);
  });

  it('should have default properties', function () {
    expect(bookingRepo.data.bookings.length).to.equal(200);
  });

  it('Should be able to find the most popular booking date', function() {
    expect(bookingRepo.returnModeBookingDate()).to.equal('29/09/2019');
  });

  it('Should be able to return a new Booking given an id', function() {
    expect(bookingRepo.returnBooking(2).data.length).to.equal(2)
  })
});