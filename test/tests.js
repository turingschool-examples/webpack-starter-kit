import chai from 'chai';
import { bookings, rooms, sampleUsers } from './test-data';

const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  it('should import test data from the test directory', ()=>{
    expect(Boolean(rooms)).to.equal(true);
    expect(Boolean(bookings)).to.equal(true);
    expect(Boolean(sampleUsers)).to.equal(true);
    
  });
});

describe('userBookings()',()=>{
  it('should return a filtered array from bookings based on user id',()=>{
    const result_1 = userBookings(sampleUsers[0].id, bookings)
    const result_2 = userBookings(sampleUsers[1].id, bookings)

    expect(result_1).to.deep.equal(
      [{
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 1,
        "date": "2022/02/05",
        "roomNumber": 12,
    
      }]
    );
    expect(result_2).to.deep.equal(
      [{
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2022/04/22",
        "roomNumber": 15,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 9,
        "date": "2022/01/24",
        "roomNumber": 24,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t9",
        "userID": 9,
        "date": "2023/12/14",
        "roomNumber": 14,
    
      }]
    );
    it('should return a string informing users they have no bookings if none are found', ()=>{
      const result = userBookings(sampleUsers[2].id, bookings)
      expect(result).to.equal('No bookings found.')
    });
  });
});

describe('getBookingCost()',()=>{
  it('should take in a room number and array of rooms return an object with the room number and its cost',()=>{
    const costIndex = getBookingCost(rooms[0],rooms)
    expect(costIndex).to.deep.equal({room: 1, cost: 358.4})
  });
});
