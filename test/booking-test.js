import chai from 'chai';
const expect = chai.expect;

import {bookings, rooms, bookedRoomsForSadPath} from './mock-data';
import {getAvailableRooms} from './booking.js'

describe('Get available bookings', function() {
    it.skip('Should return all bookings available for a given date', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookings, rooms, date);
        expect(availableRooms).to.deep.equal([bookings[0], bookings[1]])
    })
    it.skip('Should notify a customer if no rooms are available on a given date', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookedRoomsForSadPath, rooms, date);
        expect(availableRooms).to.equal('Unfortunately there are no rooms for your selected date')
    })
})

