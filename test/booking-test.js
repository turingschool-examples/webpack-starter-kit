import chai from 'chai';
import {assert, expect} from 'chai';
import Booking from '../src/classes/booking.js';

describe('Booking Data Class', function() {
  let testBooking;
  
  beforeEach(()=> {
    var testData = 
    {"rooms": [{"number": 1, "roomType": "residential suite"
      , "bidet": true, "bedSize": "queen", "numBeds": 1,
      "costPerNight": 358.4}, {"number": 2, "roomType": "suite",
      "bidet": false, "bedSize": "full", "numBeds": 2, "costPerNight": 477.38},
    {"number": 3, "roomType": "single room", "bidet": false, "bedSize": "king",
      "numBeds": 1, "costPerNight": 491.14}], 
    "bookings": [{
      "id": "5fwrgu4i7k55hl6sz", "userID": 9,"date": "2022/04/22",
      "roomNumber": 15}, {"id": "5fwrgu4i7k55hl6t5", "userID": 43,
      "date": "2022/01/24", " roomNumber": 24},
    {"id": "5fwrgu4i7k55hl6t6", "userID": 13, "date": "2022/01/10",
      "roomNumber": 1} ]}
    testBooking = new Booking(testData);
  })
  
  it('should be a function', ()=> {
    assert.isFunction(Booking);
  })

  it('should be able to create an instance of Booking', () => {
    assert.instanceOf(testBooking, Booking);
  });

  it('should concatenate a current date', () => {
    testBooking.currentYear = 2021
    testBooking.currentMonth = 12
    testBooking.currentDay = 23
    testBooking.setDate()
    assert.deepEqual(testBooking.date, "2021/12/23")
  })

  it('should filter room type', () => {
    testBooking.roomType = "single room"
    var filteredRooms = testBooking.filterRoomType()
    assert.deepEqual(filteredRooms[0].roomType, "single room")
  })

  it('should identify taken rooms', () => {
    testBooking.date = "2022/01/10"
    testBooking.roomNum = 12
    var filteredRooms = testBooking.takenThatDay()
    assert.equal(filteredRooms.length, 1)
  })
})

