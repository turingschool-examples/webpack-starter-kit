import Customer from '../src/customer'
import Customers from '../src/customersRepo'
import chai from 'chai';
const expect = chai.expect;
import Data from '../src/Data';

describe('Customer', function() {
    let guest, guests, currentGuest;
    beforeEach(function() {
        guests = new Customers(Data);
        guest = new Customer(Data);
        currentGuest = guests.findGuestByName('Jadyn Doyle');
    })
    it('should be a function', function() {
        expect(Customer).to.be.a('function')
    })

    it('should be an instance of Customer', function() {
        expect(guest).to.be.an.instanceOf(Customer)
    })

    it('should find all previous room service dates and dollar amounts', function() {
        expect(guest.findOrderBreakDown(currentGuest)).to.eql({'21/10/2019': [9.48, 7.57] })
    })
    
    it('should find total amount spent on room service for a particular date', function() {
        expect(guest.findRoomServiceTotalByDate('21/10/2019', currentGuest)).to.equal(17.05)
    })

    it('should find total for all time room service charges', function() {
        expect(guest.findAllTimeOrderTotal(currentGuest)).to.equal(17.05)
    })

    it('should find a summary of all reservations for a specific customer', function() {
        expect(guest.findBookingsSummary(currentGuest)).to.eql({ '21/10/2019': 97})

    })
})