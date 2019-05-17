import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Wheel from '../src/Wheel.js';

describe('Wheel', function() {
  let wheel;
  beforeEach(function() {
    wheel = new Wheel();
  });

  it('should have default properties', function() {
   
  });
})