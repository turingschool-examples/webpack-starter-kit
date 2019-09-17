import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import Customer from '../src/Customer.js';
import data from '../data/data.js'
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
import Bookings from '../src/Bookings.js';
chai.use(spies);
chai.spy.on(DOMupdates, ['customerSample'], () => {});


  describe('Customer', () => {
    let hotel = new Hotel(data.users, data.rooms, data.bookings, data.roomService);

  it('should be a function that will create an instance of customer', () => {
    expect(Customer).to.be.a('function');
    expect(hotel.customers[0]).to.be.an.instanceof(Customer);
  });
});