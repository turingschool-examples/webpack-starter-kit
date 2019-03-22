import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';

describe('Game', function() {
  it('the length of players should start as 0', function() {
    let game = new Game();

    expect(game.players.length).to.equal(0);
  })

  // it('After game starts players length should deep equal 3', function() {
  //   let game = new Game();

  //   game.startGame();

  //   expect(game.players.length).to.equal(3);
  // })
})