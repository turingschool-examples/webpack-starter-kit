import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

describe("Customer", () => {
  let customer;

  beforeEach(() => {
    customer = new Customer;
  })

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  })
})
