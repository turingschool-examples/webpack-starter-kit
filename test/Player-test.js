import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';


describe('Player', function() {
  it('should instantiate a new player', function() {
    let player = new Player()
    expect(player).to.be.an('object');
  });

  it('should change points', function() {
    let player = new Player();
    player.changeScore(100);

    expect(player.score).to.equal.apply(player.score === 100);
    expect(domUpdates.displayPlayerScore).to.be.called(1);
  });

})