import chai from 'chai';
const expect = chai.expect;
import CustomerRepo from '../src/CustomersRepo';
import data from '../src/data-sample';

describe('CustomerRepo', function() {

  let customerRepo;
  beforeEach(function() {
    customerRepo = new CustomerRepo(data.users);
  })

  it('should be a function', function() {
    expect(CustomerRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(customerRepo).to.be.an.instanceOf(CustomerRepo);
  });

  it('returnCustomerName should return customers name using customer object', function() {
    expect(customerRepo.returnCustomerName(data.users[4])).to.equal('Reginald Schaden');
  });

  it('addNewCustomer should add new customer to custermrsData', function() {
    expect(customerRepo.currentID).to.equal(31);
    customerRepo.addNewCustomer('Andreea');
    expect(customerRepo.currentID).to.equal(32);
    customerRepo.addNewCustomer('David');
    expect(customerRepo.currentID).to.equal(33);
    expect(customerRepo.customersData[31]).to.eql({id: 32, name: 'David'});
  });

  it('searchCustomerName should return customerID', function() {
    expect(customerRepo.searchCustomerName('Andreea')).to.eql(31);
    expect(customerRepo.searchCustomerName('Elmer Hyatt')).to.eql(27);
    expect(customerRepo.searchCustomerName('Jev')).to.eql('Customer does not exist');
  });
});