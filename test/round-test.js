import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Round from '../src/Round.js';
import domUpdates from '../src/domUpdates.js';

describe('Round', function () {
  beforeEach(function() {
    chai.spy.on(domUpdates, 'updateCategories', () => true);
  });
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });
  it('should have a new instance of Round', function () {
    let round = new Round;
  });
  it('should have properties of cluesRemaining, dailyDoubleClue', function () {
    let round = new Round;

    expect(round.cluesRemaining).to.equal(16);
    expect(round.dailyDoubleClue).to.equal(0);
  });
  it('categoryIds should have four numbers', function() {
    let round = new Round;
    let game = new Game;

    game.createRound();

    expect(round.categoryIds).to.equal([1, 2, 3, 4]);
  })
  // it('should populate the category names array with categories', function () {
  //   let round = new Round;

  //   round.populateCategories();

  //   expect(round.categoryNames).to.deep.equal(['US History', 'Life Sciences', 'Public Health', 'Education Jargon'])
  // })
})