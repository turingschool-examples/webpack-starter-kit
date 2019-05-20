import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Puzzle from '../src/Puzzle.js';

describe.skip('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('should have default properties', function() {
   
  });
})