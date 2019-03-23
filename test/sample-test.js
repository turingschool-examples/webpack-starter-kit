import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Rounds from '../src/Rounds.js'

describe('Game', function() {
  it('should take player names ', function() {
    let rounds = new Rounds('Erik');
    expect(rounds.playerName).to.equal('Erik')
  });
  it('player dollar amount should be 0 by default', function() {
    let rounds = new Rounds('Erik');
    expect(rounds.playerDollarAmount).to.equal(0);
  });
});

describe('Rounds', function() {
  it('should inherit parameters from super class ', function() {
    let game = new Game('Erik')
    let rounds = new Rounds(game.playerName);

    expect(game.playerName).to.equal('Erik');

    expect(rounds.playerName).to.equal('Erik');
    expect(rounds.playerDollarAmount).to.equal(0);
  });
});
