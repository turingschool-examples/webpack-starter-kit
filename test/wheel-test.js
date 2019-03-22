import chai from 'chai'
import Wheel from '../src/js/wheel';
const expect = chai.expect;

describe('Wheel', () => {

  let wheel;
  beforeEach(() => {
    wheel = new Wheel();
  })

  it('should have a default current value of 0', () => {
    expect(wheel.currentValue).to.be.equal(0);
  })

  it('should have an empty array for its values by default', () => {
    expect(wheel.values).to.be.deep.equal([]);
  })

  it('should generate 6 random "prizes"', () => {
    wheel.generatePrizes();
    expect(wheel.values).to.have.lengthOf(6)
  })

  it('should pick a random prize from the values array', () => {
    expect(wheel.currentValue).to.be.equal(0);
    wheel.generatePrizes();
    wheel.spin();
    expect(wheel.currentValue).to.not.equal(0);
  })

})