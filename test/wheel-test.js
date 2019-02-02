import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Wheel from '../src/scripts/wheel.js';
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing Wheel methods and properties', () => {
  var wheel;

  beforeEach(function () {
    wheel = new Wheel({});
  });

  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should have correct default properties', () => {
    expect(wheel.spaces).to.deep.equal([]);
    expect(wheel.currentSpace).to.equal(null);
  });

  it('should reassign this.spaces to an array of 6 spaces', () => {
    expect(wheel.spaces).to.deep.equal([]);
    wheel.createSpaces()
    expect(wheel.spaces.length).to.equal(6);

  });

  it('should reassign this.currentSpace to have value', () => {
    expect(wheel.currentSpace).to.equal(null);
    wheel.spaces = [600, 600, 600, 600, 600, 600]
    wheel.spin()
    expect(wheel.currentSpace).to.equal(600);


  })

});