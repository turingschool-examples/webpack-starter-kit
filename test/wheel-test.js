import chai from 'chai'
import Wheel from '../src/js/wheel';
const expect = chai.expect;

describe('Wheel', () => {

  let wheel;
  beforeEach(() => {
    wheel = new Wheel();
  });

  it('should have a default current value of 0', () => {
    expect(wheel.currentValue).to.be.equal(0);
    expect(wheel.values).to.be.deep.equal([]);
  });

  it('should generate a random value', () => {
    expect(wheel.currentValue).to.be.equal(0);
    wheel.spin();
    expect(wheel.values).to.have.lengthOf(5);
    expect(wheel.currentValue).to.not.equal(0);
  });

})