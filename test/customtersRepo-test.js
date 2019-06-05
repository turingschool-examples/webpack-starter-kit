import chai from 'chai';
const expect = chai.expect;
import Customers from '../src/customersRepo';
import Data from '../src/Data';

describe.skip('CustomersRepo', function() {
  let guestsRepo;
  beforeEach (function() {
    guestsRepo = new Customers(Data)
  });

  it('should be a function', function() {
    expect(Customers).to.be.a('function')
  });
    
  it('should be an instance of Customers', function() {
    expect(guestsRepo).to.be.an.instanceOf(Customers)
  });

  it('should find a customer by name', function() {
    expect(guestsRepo.findGuestByName('Kiel O\'Reilly')).to.equal(Data.users.users[9])
  });

  it('should be able to add new customers', function() {
    guestsRepo.addNewGuest('Oprah', 'Winfrey');
    expect(guestsRepo.newGuests).to.eql([{id: 12, name: 'Oprah Winfrey'}])
  })
})
