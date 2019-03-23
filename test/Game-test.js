import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates';
import data from '../src/data';

chai.use(spies);
const assert = chai.assert;

describe('Game', () => {

  it.skip('should start at round 0', () => {
    const game = new Game();
    assert.equal(game.currentRound, 0);
  });

  it.skip('should accept an array of players', () => {
    const player1 = new Player('Jarrett', 1);
    const player2 = new Player('Brennan', 2);
    const game = new Game(player1, player2);

    assert.equal(game.players[0].name, 'Jarrett');
    assert.equal(game.players[1].name, 'Brennan');
  }); 

  it.skip('should start on player 1', () => {
    const player1 = new player('Brennan');
    const player2 = new player('Jarrett');
    const game = new Game(player1, player2);
    assert.equal(game.currentPlayer, player1);
  });

  it.skip('should start with an empty array of surveys', () => {
    const game = new Game();
    assert.equal(game.surveys, []);
  });

  it.skip('should be able to start the game and grab surveys', () => {
    const player1 = new player('Brennan');
    const player2 = new player('Jarrett');
    const game = new Game(player1, player2);
    game.startGame();
    assert.equal(game.surveys.length, 15)
  });

  it.skip('should start increment round upon initiation of game', () => {
    const player1 = new player('Brennan');
    const player2 = new player('Jarrett');
    const game = new Game(player1, player2);
    game.startGame();
    assert.equal(game.round, 1);
  });

  // how to test a randomized current round
  it.skip('should have a currentRound upon initiation of the game', () => {
    const player1 = new player('Brennan');
    const player2 = new player('Jarrett');
    const game = new Game(player1, player2);
    game.startGame();
    assert.equal(game.currentRound, )
  })

  // move to round-test
  it.skip('should be able to check a guess', () => {
    const game = new Game(['Jarrett', 'Brennan']);
    const player = new Player('Jarrett');
    const guess = domUpdates.getGuess();
    game.checkAnswer(player, guess);
  });

  // move to Round-test
  // it.skip('should update a player score if their guess is correct', () => {

  // });

  // move to Round-test
  // it.skip('should switch players if the guess is wrong', () => {

  // });

  // move to round 
  // it.skip('should check if all responses have been guessed', () => {

  // });


  // should have round counter, nun, default 0 or 1
  // should have players, array, call createPlayers
  // should createPlayers, return [] of Players
  // should check guess 
  // should have startGame
  // should have nextRound
  // should have getWinner  

});