import chai from 'chai';
const expect = chai.expect;
import { createCustomer, createHotelRoom, createBooking } from '../src/scripts.js';
// import mockBookings from '../overlook-api/data/mockBookings.js';
import mockCustomers from '../test/mockCustomers.js';
// import mockRooms from '../overlook-api/data/mockRooms.js';


describe('Customer Functionality', function () {
  it('creates a customer and verifies properties', function() {
    const customer = createCustomer(1, 'Alice Johnson');
    expect(customer).to.include.all.keys('id', 'name');
    expect(customer.id).to.equal(1);
    expect(customer.name).to.equal('Alice Johnson');
  });

  it('handles multiple customer objects independently', function() {
    const customers = [];
    customers[0] = createCustomer(customers.length++, 'Alice Johnson')
    customers[1] = createCustomer(customers.length++, 'Bob Smith')
    expect(customers).to.have.lengthOf(2);
    expect(customers[0]).to.be.an('object');
    expect(customers[1]).to.be.an('object');
    expect(customers[0]).not.to.deep.equal(customers[1]);
  });
});

describe('Hotel Room Functionality', function() {
  it('should create a hotel booking', function() {
    const room1 = createHotelRoom(101, 'single', true, 'queen', 1, 120)
    expect(room1).to.be.an('object');
    expect(room1.number).to.equal(101);
    expect(room1.roomType).to.equal('single');
    expect(room1.bidet).to.equal(true);
    expect(room1.bedSize).to.equal('queen');
    expect(room1.numBeds).to.equal(1);
    expect(room1.costPerNight).to.equal(120);
  })
  it('should be able to have a different booking', function() {
    const rooms = []
    rooms[0] = createHotelRoom(101, 'single', true, 'queen', 1, 120)
    rooms[1] = createHotelRoom(102, 'double', false, 'king', 2, 200)
    expect(rooms).to.have.lengthOf(2);
    expect(rooms[0]).to.be.an('object');
    expect(rooms[1]).to.be.an('object');
    expect(rooms[0]).not.to.deep.equal(rooms[1]);
  })
});

describe('Booking Functionality', function() {
  it('creates a booking for a room', function() {
    const booking = createBooking('a1b2', 1, '2021-01-01', 101);
    expect(booking.id).to.equal('a1b2');
    expect(booking.userID).to.equal(1);
    expect(booking.date).to.equal('2021-01-01');
    expect(booking.roomNumber).to.equal(101);
  });

  it('should be able to handle more than one booking', function() {
    const bookings = []
    bookings[0] = createBooking('a1b2', 1, '2021-01-01', 101)
    bookings[1] = createBooking('c3d4', 2, '2021-01-02', 102)
    expect(bookings).to.have.lengthOf(2);
    expect(bookings[0]).to.be.an('object');
    expect(bookings[1]).to.be.an('object');
    expect(bookings[0]).not.to.deep.equal(bookings[1]);
  });

  it('ensures booking userID is an existing customer ID', function() {
    const booking = createBooking('a1b2', 1, '2021-01-01', 101);
    const customerIDs = mockCustomers.map(c => c.id);
    expect(customerIDs).to.include(booking.userID);
  });
});