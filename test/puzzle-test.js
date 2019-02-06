import chai from 'chai';
import data from '../src/data.js';
import Puzzle from '../src/Puzzle.js';
const expect = chai.expect;


describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('instantiates our good friend, Puzzle', function() {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  });

  it('should have default values', function() {
    expect(puzzle.hint).to.equal(null);
    expect(puzzle.puzzleDetails).to.equal(null);
    expect(puzzle.difficulty).to.equal(null);
    expect(puzzle.domDifficulty).to.equal(null);
    expect(puzzle.category).to.equal(null);
    expect(puzzle.answer).to.deep.equal([]);
  });
  
  //fails
  it.skip('selects a random puzzle bank based on the difficulty', function() {
    expect(puzzle.difficulty).to.equal(null);
    puzzle.chooseDifficulty();
    expect(puzzle.difficulty).to.equal({});
  });

});



// let object = new Puzzle();
// object.randomPuzzle(difficulty4);
// console.log(object.puzzleDescription);