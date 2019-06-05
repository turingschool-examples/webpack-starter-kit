import chai from 'chai';
const expect = chai.expect;
import OrderRepo from '../src/orderRepo';
import Data from '../src/Data';

describe('Order Repo', function() {
  let orderRepo;
  beforeEach(function() {
    orderRepo = new OrderRepo(Data);
  });

  it('should be a function', function() {
    expect(OrderRepo).to.be.a('function');
  });

  it('should be an instance of Order Repo', function() {
    expect(orderRepo).to.be.an.instanceOf(OrderRepo)
  });

  it('should return all orders for today\'s date', function() {
    expect(orderRepo.findOrdersForToday()).to.eql([{
      date: "05/06/2019",
      food: "Ergonomic Plastic Sandwich",
      totalCost: 19.3,
      userID: 82
    }])
  });

  it('should return all orders for a specific date', function() {
    expect(orderRepo.findOrderByDate('15/07/2019')).to.eql([ {
      userID: 9,
      date: "15/07/2019",
      food: "Tasty Fresh Sandwich",
      totalCost: 13.07
    }])
  });

  it('should add a new order', function() {
    orderRepo.addNewOrder( {userID: 22,
      date: "01/01/2020",
      food: "Rustic Soft Sandwich",
      totalCost: 18.63
      })
    expect(orderRepo.data.roomServices.roomServices.length).to.equal(12)
  })

  
})