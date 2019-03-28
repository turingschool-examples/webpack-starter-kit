import chai from 'chai';
const expect = chai.expect;
import Wheel from '../src/wheel.js';

import spies from 'chai-spies';
chai.use(spies);

describe('Wheel', ()=>{
  it('Should be a function', ()=>{
    expect(Wheel).to.be.a('function');
  })
  it('Should instanciate a new object', ()=>{
    const wheel = new Wheel();
    expect(wheel).to.be.a('object')
  })
  it('Should be able to have an array passed in', ()=>{
    const wheel = new Wheel([ 900, 'BANKRUPT', 2500, 600, 700, 600, 650, 500, 700, 'BANKRUPT', 600, 550, 500, 600, 'BANKRUPT', 'LOSE A TURN', 700, 800, 500, 650, 500, 900]);
    expect(wheel.wheelSlices).to.deep.equal([ 900, 'BANKRUPT', 2500, 600, 700, 600, 650, 500, 700, 'BANKRUPT', 600, 550, 500, 600, 'BANKRUPT', 'LOSE A TURN', 700, 800, 500, 650, 500, 900]);
  })

})
