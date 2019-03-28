import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';

describe('Game', function() {
  it('the length of players should start as 0', function() {
    let game = new Game();

    expect(game.players.length).to.equal(0);
  })

  it('After game starts players length should deep equal 3', function() {
    let game = new Game();

    game.createPlayers();

    expect(game.players.length).to.equal(3);
  })

  it.skip('After game starts alphabet should contain all letters', function() {
    let game = new Game();

    game.createLetters();

    expect(game.alphabet.length).to.equal(26);
  })

  it('The clue bank should contain the information from the data set', function() {
    let game = new Game();

    game.createClues();

    expect(game.gameRoundsClueBank.length).to.equal(4);
  })

  it.skip('Create game board is a function', function() {
    let game = new Game();

    game.createGameBoard();
  })
})