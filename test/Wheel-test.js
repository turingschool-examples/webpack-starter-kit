import Wheel from '../src/Wheel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Wheel', function() {
  let wheel;
  beforeEach(function() {
    wheel = new Wheel();
  })
  
  it('should have default properties', function() {
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentIndex).to.deep.equal([]);
  })

  it('should be an instance of wheel', function() {

    expect(wheel).to.be.an.instanceof(Wheel);
  });
})