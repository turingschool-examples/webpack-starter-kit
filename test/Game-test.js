import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates'

chai.use(spies);
const assert = chai.assert;

describe('Game', () => {

  it.skip('should start at round 0', () => {
    const game = new Game();
    assert.equal(game.currentRound, 0);
  });

  it.skip('should have an array of surveys', () => {
    const game = new Game();
    assert.equal(game.surveys, []);
  });

  it.skip('should accept an array of players', () => {
    const game = new Game();
    assert.equal(game.players, []);

    const game2 = new Game(['Jarrett', 'Brennan']);
    assert.equal(game2.players[0], 'Jarrett');
    assert.equal(game2.players[1], 'Brennan');
  }); 

  it.skip('should start on player 1', () => {
    const game = new Game(['Jarrett', 'Brennan']);
    assert.equal(game.currentPlayer, 0);
  });

  it.skip('should be able to check a guess', () => {
    const game = new Game(['Jarrett', 'Brennan']);
    const player = new Player('Jarrett');
    const guess = domUpdates.getGuess();
    game.checkAnswer(player, guess);
  });

  it.skip('should update a player score if their guess is correct', () => {

  });

  it.skip('should switch players if the guess is wrong', () => {

  });

  it.skip('should check if all responses have been guessed', () => {

  });


  // should have round counter, nun, default 0 or 1
  // should have players, array, call createPlayers
  // should createPlayers, return [] of Players
  // should check guess 
  // should have startGame
  // should have nextRound
  // should have getWinner  

});