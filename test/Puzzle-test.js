import Puzzle from '../src/Puzzle.js';
import data from '../src/data.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'displayLetterMatch', () => true);
chai.spy.on(domUpdates, 'displayVowelMessage', () => true);

describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle(data.puzzles.one_word_answers.puzzle_bank[0]);
  });
  
  it('should have default properties', function() {
    expect(puzzle.guessedBank).to.deep.equal([]);
    expect(puzzle.category).to.equal('Around The House');
    expect(puzzle.description).to.equal('Location or object(s) found within a typical house.');
    expect(puzzle.answer).to.equal('Armchair');
    expect(puzzle.numWords).to.equal(1);
  })

  it('should be an instance of Puzzle', function() {

    expect(puzzle).to.be.an.instanceof(Puzzle);
    });
  });