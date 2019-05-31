import chai from 'chai';
const expect = chai.expect;

import bookingData from '../Data/booking-data'
import Booking from '../src/bookings'

describe('Booking', function() {
  let booking;
  beforeEach(function() {
    booking = new Booking(bookingData);
  }) 

  it('should be a function', function() {
    expect(Booking).to.be.a('function')
  })

  it('should be an instantiation of the Booking class', function() {
    expect(booking).to.be.an.instanceOf(Booking)
  })

  it('should be able to take data in as a parameter', function() {
    expect(booking.data.length).to.equal(200)
  })

  it('should be able to find all booking information by date', function() {
    expect(booking.findByDate('21/08/2019').length).to.equal(1)
    expect(booking.findByDate('21/08/2019')[0]).to.deep.equal({userID: 78, date: "21/08/2019", roomNumber: 143})
  })

  it('should find the most popular booking date', function() {
    expect(booking.mostPopularDate()).to.equal('29/09/2019')
  })

  it('should be able to find the bookings for a customer by id', function() {
    expect(booking.findById(78).length).to.equal(1)
  })

  it('should be able to find all rooms by date and return the room numbers', function() {
    expect(booking.roomsTakenByDate('29/09/2019')).to.deep.equal([50, 79, 13, 51])
  })

  it('should find the percentage of open rooms', function() {
    expect(booking.percentageByDate('29/09/2019')).to.equal(98)
  })


})