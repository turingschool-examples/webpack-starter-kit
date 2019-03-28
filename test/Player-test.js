import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/Player.js';


const assert = chai.assert;


describe('Player', function() {
  it('should be a function', () => {

    assert.isFunction(Player);
  });

  it('makes a new player', () => {
    let player = new Player();

    assert.instanceOf(player, Player);
  });

  it('should have a name', () => {
    let player = new Player('Hannah');

    assert.equal(player.name, 'Hannah');
  });

  it('should have a score', () => {
    let player = new Player('Katie');

    assert.equal(player.score, 0);
  });

  it('should be able to increase score', () => {
    let player = new Player('Hannah');
    let num = 5;

    player.addScore(num);

    assert.equal(player.score, 5);
  });

  it('should score points during lightning round', () => {
    let player = new Player('Katie');
    let num = 25;

    player.lightningScore(num);

    assert.equal(player.score, 25);
  });

})
