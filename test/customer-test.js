import Customer from '../src/customer'
import chai from 'chai';
const expect = chai.expect;
import Data from '../src/Data';

describe('Customer', function() {
  let guest, currentGuest;
  beforeEach(function() {
    guest = new Customer(Data);
    currentGuest = guest.findGuestByName('Jadyn Doyle');
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function')
  })

  it('should be an instance of Customer', function() {
    expect(guest).to.be.an.instanceOf(Customer)
  })

  it('should find a customer by name', function() {
    expect(guest.findGuestByName('Jadyn Doyle')).to.eql([{
      id: 34,
      name: "Jadyn Doyle"
    }])
  });

  it('should be able to add new customers', function() {
    guest.addNewGuest('Oprah', 'Winfrey');
    expect(guest.newGuests).to.eql([{id: 12, name: 'Oprah Winfrey', clicked: false}])
  })

  it('should find all previous room service dates and dollar amounts', function() {
    guest.findGuestByName('Jadyn Doyle')
    expect(guest.findOrderBreakDown(currentGuest[0])).to.eql([{userID: 34,
      date: '21/10/2019',
      food: 'Generic Plastic Sandwich',
      totalCost: 9.48 },
    { userID: 34,
      date: '21/10/2019',
      food: 'Intelligent Metal Sandwich',
      totalCost: 7.57 }])
  })
    
  it('should find total amount spent on room service for a particular date', function() {
    expect(guest.findRoomServiceTotalByDate('21/10/2019', currentGuest[0])).to.equal(17.05)
  })

  it('should find total for all time room service charges', function() {
    expect(guest.findAllTimeOrderTotal(currentGuest[0])).to.equal(17.05)
  })

  it('should find a summary of all reservations for a specific customer', function() {
    expect(guest.findBookingsSummary(currentGuest[0])).to.eql([ { userID: 34, date: '21/10/2019', roomNumber: 97 } ])

  })
})