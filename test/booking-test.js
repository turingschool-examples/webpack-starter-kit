import chai from 'chai';
const expect = chai.expect;

import {bookings, rooms, bookedRoomsForSadPath} from './mock-data';
import {getAvailableRooms} from '../src/booking.js'

describe('Get available bookings', function() {
    it('Should return all bookings available for a given date', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookings, rooms, date);
        expect(availableRooms).to.deep.equal([rooms[0], rooms[1]])
    })
    it('Should notify a customer if no rooms are available on a given date', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookedRoomsForSadPath, rooms, date);
        expect(availableRooms).to.equal('We apologize, but unfortunately there are no rooms for your selected date')
    })
})

