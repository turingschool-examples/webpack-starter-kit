import {expect} from 'chai';
import Customer from '../src/classes/Customer.js';
import customersSample from '../src/data/customers-sample';
import roomsSample from '../src/data/rooms-sample.js';
import bookingsSample from '../src/data/bookings-sample';

describe.only('Customer tests', function() { 
  let customer1, customer4, customer10;

  this.beforeEach('instantiate customers', () => {
    customer1 = new Customer(customersSample[0]);
    customer4 = new Customer(customersSample[3]);
    customer10 = new Customer(customersSample[9]);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
    expect(customer4).to.be.an.instanceOf(Customer);
    expect(customer10).to.be.an.instanceOf(Customer);
  });

  it('should have an ID', () => {
    expect(customer1.id).to.equal(1);
    expect(customer4.id).to.equal(4);
    expect(customer10.id).to.equal(10);
  });

  it('should have a name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich');
    expect(customer4.name).to.equal('Kennedi Emard');
    expect(customer10.name).to.equal('Tony Armstrong');
  });

  it('should be able to get all its bookings', () => {
    const bookings1 = [ 
      {
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 1,
        "date": "2022/02/05",
        "roomNumber": 12
      },
      {
        "id": "5fwrgu4i7k55hl6x8",
        "userID": 1,
        "date": "2023/01/11",
        "roomNumber": 20
      }
    ];

    const bookings2 = [
      {
        "id": "5fwrgu4i7k55hl6u0",
        "userID": 4,
        "date": "2023/01/08",
        "roomNumber": 5
      }
    ];

    expect(customer1.getCustomerBookings(bookingsSample)).to.deep.equal(bookings1);
    expect(customer4.getCustomerBookings(bookingsSample)).to.deep.equal(bookings2);
  });

  it('should be able to get the total cost of its bookings', () => {
    const customer6 = new Customer(customersSample[5]);
    const customerNoBookings = new Customer({id: 111, name: 'Jordan Doe'});

    expect(customer4.getTotalCost(bookingsSample, roomsSample)).to.equal(340.17);
    expect(customer6.getTotalCost(bookingsSample, roomsSample)).to.equal(628.48);
    expect(customerNoBookings.getTotalCost(bookingsSample, roomsSample)).to.equal(0);
  });

  it('should be able to return info for a room it would like to book', () => {
    const customer1Booking = customer1.getRoomToBook('2022-04-14', 15);
    const customer4Booking = customer4.getRoomToBook('2021-01-11', 1);
    const customer10Booking = customer10.getRoomToBook('2023-12-17', 14);

    const booking1 = {userID: 1, date: '2022/04/14', roomNumber: 15};
    const booking2 = {userID: 4, date: '2021/01/11', roomNumber: 1};
    const booking3 = {userID: 10, date: '2023/12/17', roomNumber: 14};

    expect(customer1Booking).to.deep.equal(booking1);
    expect(customer4Booking).to.deep.equal(booking2);
    expect(customer10Booking).to.deep.equal(booking3);
  })
});