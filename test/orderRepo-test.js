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

    it('should find total cost of room service orders for a specific date', function() {
        expect(orderRepo.calculateRoomServiceCostByDate('06/02/2020'))
    })
})