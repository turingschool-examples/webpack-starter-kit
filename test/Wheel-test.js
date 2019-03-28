import chai from 'chai';
const expect = chai.expect;

import Wheel from '../src/Wheel.js';

describe('Wheel', function() {
  it('Should have wheel value of an empty array to start', function() {
    let wheel = new Wheel();

    expect(wheel.wheelValues.length).to.equal(0);
  })

  it('Should have a selected value of 0 to start', function() {
    let wheel = new Wheel();

    expect(wheel.selectedValue).to.equal(0);
  })
})