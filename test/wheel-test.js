import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Wheel from '../src/scripts/wheel.js';
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing Wheel methods and properties', function() {
var wheel;

beforeEach(function () {
    wheel = new Wheel({});
});

afterEach(function() {
    chai.spy.restore(domUpdates);
});

it('should have correct default properties', function() {
    expect(wheel.spaces).to.deep.equal([]);
    expect(wheel.currentSpace).to.deep.equal({});
});

});