import chai from 'chai'
import BonusWheel from '../src/js/bonusWheel';
const expect = chai.expect;


describe('BonusWheel', () => {

  let bonusWheel;
  beforeEach(() => {
    bonusWheel = new BonusWheel();
  });

  it('should have a default state', () => {
    expect(bonusWheel.currentValue).to.be.equal(0);
    expect(bonusWheel.values).to.be.deep.equal([]);
  });

  it('should update the prizes for the Bonus Round', () => {
    expect(bonusWheel.values).to.deep.equal([]);
    bonusWheel.changePrizes();
    expect(bonusWheel.values).to.include('trip to anatomy park', 'your own personal morty', 'a broken portal gun', 'butter-serving robot', 'one month interdimensional cable');
  });

})