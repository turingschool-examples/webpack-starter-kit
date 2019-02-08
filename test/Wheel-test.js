import Wheel from '../src/Wheel.js'
import data from '../src/Data.js'
import chai from 'chai'

const expect = chai.expect
 
describe('Wheel', function() {
  let wheel;

  it('should have default wheel values', function() {
    wheel = new Wheel()
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentValue).to.equal(0);
    expect(wheel.players).to.deep.equal([])
  })


  it('should instantiate a new wheel', function() {
    wheel = new Wheel([1, 2, 3, 4, 5, 6, 7, 8], 600);
    expect(wheel.values).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(wheel.currentValue).to.equal(600);
  });

  // it('should populate the wheel with all wheel values but randomized', function() {
  //   let array = [1,2,3,4,5,6,7,8,9]

  //   wheel.populateWheel(array);

  //   expect(wheel.values.length).to.equal(9);
  //   expect(wheel.values).to.not.equal([1,2,3,4,5,6,7,8]);

  // })

})  