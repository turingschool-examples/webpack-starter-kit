import chai from 'chai';
const expect = chai.expect;
import MainRepo from '../src/MainRepo';
import data from '../src/data-sample';

describe('CustomerRepo', function() {

  let mainRepo;
  beforeEach(function() {
    mainRepo = new MainRepo(data.users);
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
    expect(mainRepo.customersData[31]).to.eql({id: 32, name: 'David'});
  });

  it('searchCustomerName should return customerID', function() {
    expect(mainRepo.searchCustomerName('Andreea')).to.eql(31);
    expect(mainRepo.searchCustomerName('Elmer Hyatt')).to.eql(27);
    expect(mainRepo.searchCustomerName('Jev')).to.eql('Customer does not exist');
  });
});