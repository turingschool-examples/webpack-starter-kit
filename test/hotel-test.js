import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel.js';
import Customer from '../src/customer.js';
import Bookings from '../src/bookings.js';
import data from '../data/data.js'
import spies from 'chai-spies';
import DOMupdates from '../src/domUpdates.js';
chai.use(spies);
chai.spy.on(DOMupdates, ['displayDailyStats', 'displayCurrentCustomer', 'displaySearchResults', 'displayBookings', 'dailyBookings', 'displayNewCustomer', 'displayNewCustomerShowHide', 'jumpToCustomerBooking', 'appendSortedRooms', 'showBookRoomPrompt', 'showUpgradeRoomPrompt', 'showUnbookWarning', 'jumpToOrders', 'showFoodLabel', 'jumpToCustomerUpgradeBooking', 'updateOrderTable'], () => {});

describe('Hotel', () => {
  let hotel = new Hotel(data.users, data.rooms, data.bookings, data.roomService);
  it('should be a function that instantiates a hotel', () => {
    expect(Hotel).to.be.a('function');
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have 20 users', () => {
    expect(hotel.userData.length).to.equal(20);
  });

  it('should have 50 rooms', () => {
    expect(hotel.roomData.length).to.equal(50)
  });

  it('should have a SHIT TON of bookings', () => {
    expect(hotel.bookingData.length).to.equal(51)
  })
});