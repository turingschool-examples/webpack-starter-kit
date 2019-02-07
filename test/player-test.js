import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/player.js';
// import domUpdates from '../src/domUpdates.js';

describe('Player', function() {
  var player;

  beforeEach(function() {
    // player = new Player();
    // chai.spy.on(domUpdates, 'startGame', returns => true);
  });

  afterEach(function() {
    // chai.spy.restore(domUpdates);
  });

  it('should instantiate our good friend, player', function() {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should have properties', function() {
    player = new Player("Archie", 0, 0, 1, false);
    expect(player.name).to.equal("Archie");
    expect(player.score).to.equal(0);
    expect(player.wager).to.equal(0);
    expect(player.playerNum).to.equal(1);
    expect(player.active).to.equal(false);
  });

  it('should update their score', function() {
    player = new Player("Archie", 0, 0, 1, false);
    expect(player.score).to.equal(0);
    player.updateScore(300);
    expect(player.score).to.equal(300);
    player.updateScore(-200);
    expect(player.score).to.equal(100);
  })

});