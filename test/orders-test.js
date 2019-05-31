import chai from 'chai';
const expect = chai.expect;

import Order from '../src/orders'
import serviceData from '../Data/service-data'

describe.skip('Order', function() {
  let order, currentDate;
  beforeEach(function() {
    currentDate = ''
    order = new Order(serviceData)
  })

  it('should be a function',  function() {
    expect(Order).to.be.a('function')
  })

  it('should be an instaniation of the Order class', function() {
    expect(order).to.be.an.instanceOf(Order)
  })

  it('should have a parameter that can take in data', function() {
    expect(order.data.length).to.equal(100)
  })

  it('should have a method to find the orders for a specific date', function() {
    expect(order.findByDate('21/10/2019').length).to.equal(2)
    expect(order.findByDate('30/05/2019')).to.deep.equal([])
  })

  it('should be able to find orders by a customers id', function() {
    expect(order.findById(34).length).to.equal(2)
  })

  it('should be able to return total amount spent for a particular day', function() {
    expect(order.totalSpentByDate('21/10/2019')).to.equal(17.05)
  })

  it('should be able to calculate the total amount ever spent', function() {
    expect(order.totalAmountSpent()).to.equal(1508.60)
  })

  it('should return total spent for all time by a specific customer', function() {
    expect(order.customerTotalSpent(97)).to.equal(43.4)
  })

  it('should have a list of the food items and their prices', function() {
    expect(Object.keys(order.itemsAndPrices()).length).to.equal(76)
  })
})