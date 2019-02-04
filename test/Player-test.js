import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
import Game from '../src/Game.js'
import domUpdates from '../src/domUpdates.js';

describe('Player', function() {
  let player;

  beforeEach(function() {
    player = new Player();
  });

  it('should instantiate a new player', function() {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should change points when changeScore is called', function() {
    let game = new Game ();
    game.currentPlayer = player;
    player.score = 0;

    player.changeScore(100, game);

    expect(player.score).to.deep.equal(100);
    expect(domUpdates.displayPlayerScore).to.be.called();
  });

})