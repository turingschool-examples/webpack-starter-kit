import chai from 'chai';
import Puzzle from '../src/Puzzle.js'
const expect = chai.expect;


describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('instantiates our good friend, Puzzle', function() {
    expect(puzzle).to.be.an('object');
  })

});
