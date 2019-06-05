import chai from 'chai';
const expect = chai.expect;
import MainRepo from '../src/MainRepo';
import Data from '../src/Data';

describe('MainRepo', function() {
  let main;
  beforeEach (function() {
    main = new MainRepo(Data)
  })

  it('should be a function', function() {
    expect(MainRepo).to.be.a('function')
  })

  it('should be an instance of MainRepo', function() {
    expect(main).to.be.an.instanceOf(MainRepo)
  })

  it('should find total rooms available to book today', function() {
    expect(main.findTotalRoomsAvailableToday('18/07/2019')).to.equal(9)
  })

  it('should find percentage of rooms available', function() {
    expect(main.findPercentageOfRoomsAvailable('18/07/2019')).to.be.a('number')
    expect(main.findPercentageOfRoomsAvailable('18/07/2019')).to.equal(90)
  })

  it('should find total balance owed for today', function() {
    expect(main.findOutstandingBalance('18/07/2019')).to.be.a('number')
    expect(main.findOutstandingBalance('18/07/2019')).to.equal(386.70)
  })
})