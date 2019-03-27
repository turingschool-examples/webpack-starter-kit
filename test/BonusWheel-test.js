import BonusWheel from "../src/BonusWheel.js";
import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;


describe('BonusWheel', () => {
  let wheel;
  beforeEach(() => {
    wheel = new BonusWheel();
  });
  it('should be an instance of Wheel', () => {
    expect(wheel).to.be.an.instanceof(BonusWheel);
  });

  it('should have default properties', () => {
    expect(wheel.prizes).to.deep.equal([]);
  });

});

