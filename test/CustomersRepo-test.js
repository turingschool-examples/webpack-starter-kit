import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import CustomersRepo from '../src/CustomersRepo';
import data from '../src/data-sample';
import domUpdates from '../src/domUpdates';
chai.spy.on(domUpdates, 'domSearchCustomerName', () => true);

describe('CustomersRepo', function() {

  let customersRepo;

  beforeEach(function() {
    customersRepo = new CustomersRepo(data, '01/06/2019');
  })

  it('should be a function', function() {
    expect(CustomersRepo).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(customersRepo).to.be.an.instanceOf(CustomersRepo);
  });

  it('searchCustomerName should return matched names', function() {
    expect(customersRepo.searchCustomerName('al')).to.eql([
      { id: 5, name: 'Reginald Schaden' },
      { id: 17, name: 'Kianna Walter' }
    ]);
  });
})