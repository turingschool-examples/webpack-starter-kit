import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/customer'
import userData from '../Data/user-data'

describe('Customer', function() {
  let customer;
  beforeEach(function() {
    customer = new Customer(userData)
  }) 

  it('should be a function', function() {
    expect(Customer).to.be.a('function')
  })

  it('should be an instance of the Customer class', function() {
    expect(customer).to.be.an.instanceOf(Customer)
  })

  it('should be able to take in customer data', function() {
    expect(customer.data.length).to.equal(100)
  })

  it('should find the user by the id', function() {
    expect(customer.findById(1).name).to.equal('Autumn Toy')
  })

  it('should be able to find a customer by their name', function() {
    expect(customer.findByName('autumn toy').id).to.equal(1)
  })
})