import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';

const assert = chai.assert;

describe('Game', function() {
  it('should be a function', () => {

  assert.isFunction(Game);
  });

  it('should instantiate a new Game', () => {
    let game = new Game;

    assert.instanceOf(game, Game);
  });

  it('should have an empty array for surveys', () => {
      let game = new Game;

      assert.isArray(game.surveys);
  }); //Do we need this if there is one in Round?
 
  it('should have a round number default of one', () => {
    let game = new Game;

    assert.equal(game.roundNumber, 1);
  });

  //skipped getSurveys()

  it.skip('should create a player name', () => {
    let game = new Game;

    game.createPlayer();

    assert.equal();
  });

  it.skip('should create check that the current player is the player currently playing', () => {
    let game = new Game;

    game.checkPlayer();

    assert.equal();
  });

  it.skip('should create a new game round', () => {
    let game = new Game;

    game.createRound();

    assert.equal();
  });

  it.skip('should switch which player is playing', () => {
    let game = new Game;

    game.switchPlayer();

    assert.equal();
  });

  it.skip('should increase round counter', () => {
      let game = new Game;

      game.countRound();

      assert.equal(); 
  });

  // it.skip('should end current round', () => {
  //   let game = new Game;

  //   game.endRound();

  //   assert.equal();
  // });

  // it.skip('should create a new Lightning Round if round counter is equal to three', () => {
  //   let game = new Game;

  //   game.lightningRound();

  //   assert.equal();
  // });

  // it.skip('should declare a winner', () => {
  //   let game = new Game:

  //   game.declareWinner();

  //   assert.equal();
  // });


})