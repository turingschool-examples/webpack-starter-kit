import {expect} from 'chai';
import Customer from '../src/classes/Customer.js';
import customersSample from '../src/data/customers-sample';
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
});