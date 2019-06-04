import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import RoomServiceDefault from '../src/RoomServiceDefault';
import data from '../src/data-sample';
import domUpdates from "../src/domUpdates";
chai.spy.on(domUpdates, 'domTodayTotalIncome', () => true);
chai.spy.on(domUpdates, 'domAllServicesOfOneDay', () => true);


describe('RoomServiceDefault', function() {

  let roomServiceDefault;
  beforeEach(function() {
    roomServiceDefault = new RoomServiceDefault(data, '01/06/2019', '');
  })

  it('should be a function', function() {
    expect(RoomServiceDefault).to.be.a('function');
  });

  it('should be an instace of CustomerRepo', function() {
    expect(roomServiceDefault).to.be.an.instanceOf(RoomServiceDefault);
  });

  it('todayTotalIncome should return total of todays income',
    function() {
      expect(roomServiceDefault.todayTotalIncome('01/06/2019')).to.equal("50.66");
    });
  
  it('allServicesOfOneDay should return all services of one day', function() {
    expect(roomServiceDefault.allServicesOfOneDay()).to.eql({
      'Generic Plastic Sandwich': [ 2, 18.96 ],
      'Tasty Fresh Sandwich': [ 1, 13.07 ],
      'Rustic Soft Sandwich': [ 1, 18.63 ]
    },
      
      );
  });

});