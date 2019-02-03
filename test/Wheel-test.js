import Wheel from '../src/Wheel.js'
import data from '../src/Data.js'
import chai from 'chai'

const expect = chai.expect
 
describe('Wheel', function() {
  let wheel;

beforeEach(function() {
  wheel = new Wheel([1,2,3,4,5,6,7,8]);
});  

  it('should instantiate a new wheel', function() {

    expect(wheel.values).to.deep.equal([1,2,3,4,5,6,7,8]);
    expect(wheel.roundValue).to.deep.equal([]);
  });

  // it('should populate the wheel with all wheel values but randomized', function() {
  //   let array = [1,2,3,4,5,6,7,8,9]

  //   wheel.populateWheel(array);

  //   expect(wheel.values.length).to.equal(9);
  //   expect(wheel.values).to.not.equal([1,2,3,4,5,6,7,8]);

  // })

})  