import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import MainRepo from '../src/MainRepo';
import data from '../src/data-sample';
import domUpdates from '../src/domUpdates';
chai.spy.on(domUpdates, "domAllAvailableRooms", () => true);
chai.spy.on(domUpdates, "domAddService", () => true);

describe('MainRepo', function() {

  let mainRepo;
  beforeEach(function() {
    mainRepo = new MainRepo(data, '01/06/2019');
  })

  it('should be a function', function() {
    expect(MainRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(mainRepo).to.be.an.instanceOf(MainRepo);
  });

  it('returnCustomerName should return customers name using customer object', function() {
    expect(mainRepo.returnCustomerName(data.users[4])).to.equal('Reginald Schaden');
  });

  it('addNewCustomer should add new customer to custermrsData', function() {
    expect(mainRepo.currentID).to.equal(31);
    mainRepo.addNewCustomer('Andreea');
    expect(mainRepo.currentID).to.equal(32);
    mainRepo.addNewCustomer('David');
    expect(mainRepo.currentID).to.equal(33);
    expect(mainRepo.data.users[31]).to.eql({id: 32, name: 'David'});
  });

  it('allAvailableRooms should return number of available rooms', function() {
    expect(mainRepo.allAvailableRooms("", "junior suite")).to.equal(38);
  });

  it.skip('bookingRoom should should be able to book a room', function() {
    expect(mainRepo.bookingRoom("Ervin Larson", 1)).to.equal();
  });

  it('cancelBooking should should be able to remove booking a record in data', function() {
    expect(mainRepo.data.bookings.length).to.equal(36);
    mainRepo.cancelBooking("17/07/2019", 192)
    expect(mainRepo.data.bookings.length).to.equal(35);
  });

  it('addService should be able to book a room', function() {
    expect(mainRepo.addService("Rustic Soft Sandwich", "Autumn Toy")).to.eql(
      {
        userID: 1,
        date: '01/06/2019',
        food: "Rustic Soft Sandwich",
        totalCost: 18.63
      }
    )
  });
  
});