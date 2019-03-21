import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Rounds from '../src/Rounds.js'

describe('Game', function() {
  it('should take player names ', function() {
    let game = new Game('Erik');
    expect(game.playerName).to.equal('Erik')
  });
  it('player dolalr amount should be 0 by default', function() {
    let game = new Game('Erik');
    expect(game.playerDollarAmount).to.equal(0);
  });
});

describe('Rounds', function() {
  it('should inherit parameters from super class ', function() {
    let game = new Game('Erik')
    let rounds = new Rounds(game.playerName, game.playerDollarAmount);

    expect(game.playerName).to.equal('Erik');

    expect(rounds.playerName).to.equal('Erik');
    expect(rounds.playerDollarAmount).to.equal(0);
  });
});
