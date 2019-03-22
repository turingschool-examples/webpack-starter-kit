import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';
// chai.spy.on(domUpdates, 'functionName', () => );

const assert = chai.assert;


describe('Player', function() {
  it('is a function', () => {

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
    let player = new Player('Katie', 20);

    assert.equal(player.score, 20);
  });


})
