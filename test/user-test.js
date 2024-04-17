import chai from 'chai';
const expect = chai.expect;

import {bookings, rooms, customers} from './mock-data';
import {getAllCustomerRoomBookings, getTotalCostForAllBookings} from '../src/user';

describe('Show all customer bookings', function() {
  it('should show all of a customers bookings, past and future', function() {
    const customer = customers[0];
    // const allRooms = rooms
    const allBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
    expect(allBookings).to.deep.equal([rooms[0], rooms[4]])
  })
  it('Should notify a customer if they have no bookings', function() {
    const customer = customers[3];
    // const allRooms = rooms;
    const allBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
    expect(allBookings).to.deep.equal('You currently have no bookings')
  });
});

describe('Show total costs of bookings', function() {
    it('Should show the total amount a user has spent on bookings', function(){
        const customer = customers[2];
        const allRoomBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
        const totalSpent = getTotalCostForAllBookings(allRoomBookings);
        expect(totalSpent).to.equal(920.58)
    })
    it('Should show zero if a customer has no bookings', function() {
        const customer = customers[3];
        const allRoomBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
        const totalSpent = getTotalCostForAllBookings(allRoomBookings);
        expect(totalSpent).to.equal(0)
    })
})

