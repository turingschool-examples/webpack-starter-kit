import chai from 'chai'
import BonusWheel from '../src/js/bonusWheel';
const expect = chai.expect;

describe('BonusWheel', () => {

  let bonusWheel;
  beforeEach(() => {
    bonusWheel = new BonusWheel();
  })

  it('should have a default current value of 0', () => {
    expect(bonusWheel.currentValue).to.be.equal(0);
  })

  it('should have an empty array for its values by default', () => {
    expect(bonusWheel.values).to.be.deep.equal([]);
  })

})