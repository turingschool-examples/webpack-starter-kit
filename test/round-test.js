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
  it('should have empty arrays for data to be stored', function () {
    let round = new Round;

    expect(round.categoryNames).to.deep.equal([]);
    expect(round.categoryIds).to.deep.equal([]);
    expect(round.clues).to.deep.equal([]);
  });
  it('categoryIds should have four numbers', function() {
    let round = new Round;
    let game = new Game;

    game.startRound();

    expect(.length).to.deep.equal(4);
  })
  // it('should populate the category names array with categories', function () {
  //   let round = new Round;

  //   round.populateCategories();

  //   expect(round.categoryNames).to.deep.equal(['US History', 'Life Sciences', 'Public Health', 'Education Jargon'])
  // })
})