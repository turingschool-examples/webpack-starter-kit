import Puzzle from '../src/Puzzle.js'
import data from '../src/Data.js'
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);

const expect = chai.expect
chai.spy.on(domUpdates, 'displayLetters', () => true);
 
describe('Puzzle', function() {
  let puzzle;

beforeEach(function() {
  puzzle = new Puzzle('meow', 2, 'friend of dorothy', 'something happy');
});  

  it('should instantiate a new puzzle', function() {

    expect(puzzle.category).to.equal('meow');
    expect(puzzle.numberOfLetters).to.equal(2);
    expect(puzzle.correctAnswer).to.equal('friend of dorothy');
    expect(puzzle.description).to.equal('something happy');
    expect(puzzle.guessedLetters).to.equal(0);
    expect(puzzle.consonantsBank).to.deep.equal([]);
    expect(puzzle.vowelsBank.length).to.equal(0);
  });

  it('should populate a bank of consonants and vowels', function() {
    expect(puzzle.populateConsonantsBank()).to.deep.equal([['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],['a','e','i','o','u']])
  })

})  