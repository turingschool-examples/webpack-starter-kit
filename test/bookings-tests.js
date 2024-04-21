import chai from 'chai';
import { bookings, rooms, sampleUsers } from './test-data';
import { userBookings, getBookingCost } from '../src/bookings';

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
        "roomNumber": 5,
    
      }]
    );
    expect(result_2).to.deep.equal(
      [{
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2022/04/22",
        "roomNumber": 1,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 9,
        "date": "2022/01/24",
        "roomNumber": 1,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t9",
        "userID": 9,
        "date": "2023/12/14",
        "roomNumber": 3,
    
      }]
    );
  });
  it('should return a string informing users they have no bookings if none are found', ()=>{
    const result = userBookings(sampleUsers[2].id, bookings)
    expect(result).to.equal('No bookings found.')
  });
});

describe('getBookingCost()',()=>{
  it('should take in a room return an object with the room number and its cost',()=>{
    const costIndex = getBookingCost(rooms[0]);
    expect(costIndex).to.deep.equal({room: 1, cost: 358.4});
  });
  it('should return a default object with a cost of zero',()=>{
    const costIndex = getBookingCost();
    expect(costIndex).to.deep.equal({room: null, cost: 0.0});
  });
  it('should return this default object if a string is passed in instead of an object.',()=>{
    const costIndex = getBookingCost('No bookings found.');
    expect(costIndex).to.deep.equal({room: null, cost: 0.0});
  })
});

describe('calculateTotalCost()',()=>{
  it.skip('should take in an array of bookings and return their total cost',()=>{
    const result = userBookings(sampleUsers[1].id, bookings);
    const totalCost = calculateTotalCost(result);
    expect(totalCost).to.equal(1207.94);
  });
  it.skip('should return a default cost of zero',()=>{
  const totalCost_1 = calculateTotalCost();
  expect(totalCost_1).to.equal(0.0);
  })
  it.skip('should return this default cost where the user has no bookings',()=>{
    const result = userBookings(sampleUsers[2].id, bookings);
    const totalCost = calculateTotalCost(result);
    expect(totalCost).to.equal(0.0);
  });

});
