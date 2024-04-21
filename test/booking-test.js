import chai from 'chai';
const expect = chai.expect;

import {bookings, rooms, bookedRoomsForSadPath} from './mock-data';
import {getAvailableRooms, filterAvailableRoomsByType} from '../src/booking.js'

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

describe('Filter rooms by their room type', function() {
    it('Should return a list of rooms that fit a given room type and that are available on the date chosen', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookings, rooms, date);
        const type = 'suite'
        const roomsByType = filterAvailableRoomsByType(availableRooms, type)
        expect(roomsByType).to.deep.equal([rooms[0], rooms[1]])
    })
    it('Should notify user if there are no rooms by that type available', function() {
        const date = "2022/01/10";
        const availableRooms = getAvailableRooms(bookings, rooms, date);
        const type = 'single room';
        const roomsByType = filterAvailableRoomsByType(availableRooms, type);
        expect(roomsByType).to.equal('We apologize, but unfortunately there are no rooms by that type available')
    })
})


