import chai from 'chai'
const expect = chai.expect;

import Game from '../src/Game.js'

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should store an array of current players, which should be empty at the start', function() {
    expect(game.players).to.deep.equal([]);
  });

  it('should store the current round, starting at round 1', function() {
    expect(game.round).to.equal(1);
  });
})
