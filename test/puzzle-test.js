import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Puzzle from '../src/scripts/puzzle.js';
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing Puzzle methods and properties', function() {
  var puzzle;

  beforeEach(function() {
    puzzle = new Puzzle('hello');
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should have correct default properties', function() {
    expect(puzzle.currentPuzzle).to.equal('hello');

  });

});