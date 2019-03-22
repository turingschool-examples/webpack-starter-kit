import Puzzle from '../src/Puzzle.js';
import chai from 'chai';
const expect = chai.expect;

describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });
  
  it('should have default properties', function() {
    expect(puzzle.letterBank).to.equal(null);
    expect(puzzle.vowels).to.deep.equal([]);
    expect(puzzle.description).to.equal(null);
    expect(puzzle.splitAnswer).to.equal(null);
  })

  it('should be an instance of Puzzle', function() {

    expect(puzzle).to.be.an.instanceof(Puzzle);
    });
  });