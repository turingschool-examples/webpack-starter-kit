import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Box from '../src/Box.js';
import domUpdates from '../src/domUpdates';
chai.spy.on(domUpdates, 'displayHeight', () => true);

describe('Box', function() {
  //takes 2 args, string of what we're testing & callback function
  it('Make sure tests are working', function() {
    //passes a string of what we want to do & callback function
    expect(true).to.equal(true);
  });

  it('Should have a default height and width', function() {
    var box = new Box(80, 50);
    expect(box.height).to.equal(80);
    expect(box.width).to.equal(50);
  })
//=====beforeEach() - runs before "it"=========
//=====afterEach() - runs after every "it"=====
//beforeEach(function() {
//  var box = new Box();
// });
//=====Hooks are scoped to the describe block they are in=========================================
//=====Cuts down on repatitive setup===========
  //What is the Test?
  it('should calculate its area', function() {
    // setup initial conditions
    var box = new Box(5, 5);
    //Execution of subject under test (S.U.T.)
    var boxArea = box.area();
    // Make an assertion
    expect(boxArea).to.equal(25);
  })

  it('should increment height by value provided in box.increaseHeight(10)', function() {
    const increase = 50;
    var box = new Box(5, 5);
    box.increaseHeight(increase);
    expect(box.height).to.equal(55);
  } )
});