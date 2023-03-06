import chai from 'chai';
import {assert, expect} from 'chai';
import HotelData from '../src/classes/hotelData';

describe('Hotel Data Class', function() {
  let testHotelData;
  
  beforeEach(()=> {
    var customerData = [1]
    var roomData = [2]
    var bookingData = [3]
    var testData = 
    { customers: customerData, rooms: roomData, bookings: bookingData }
    testHotelData = new HotelData(testData);
  })
  
  it('should be a function', ()=> {
    assert.isFunction(HotelData);
  })

  it('should be able to create an instance of Hotel Data', () => {
    assert.instanceOf(testHotelData, HotelData);
  });

  it('should store customer data', () => {
    assert.deepEqual(testHotelData.customers, [1])
  })

  it('should store room data', () => {
    assert.deepEqual(testHotelData.rooms, [2])
  })

  it('should store booking data', () => {
    assert.deepEqual(testHotelData.bookings, [3])
  })

})