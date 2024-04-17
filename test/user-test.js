import chai from 'chai';
const expect = chai.expect;

import {bookings, rooms, customers} from './mock-data';
import {} from '../src/user';

describe('Show all customer bookings', function() {
  it.skip('should show all of a customers bookings, past and future', function() {
    const customer = customers[0];
    const allRooms = rooms
    const allBookings = getAllCustomerRoomBookings(customer, bookings, allRooms);
    expect(allBookings).to.deep.equal(rooms[0], rooms[4])
  })
  it.skip('Should notify a customer if they have no bookings', function() {
    const customer = customers[3];
    const allRooms = rooms;
    const allBookings = getAllCustomerRoomBookings(customer, bookings, allRooms);
    expect(allBookings).to.deep.equal('You currently have no bookings')
  });
});

export {
    getAllCustomerRoomBookings
}