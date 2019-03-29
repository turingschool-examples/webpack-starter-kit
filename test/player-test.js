import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';

import Game from '../src/Game.js';

describe ('Player', function() {
  beforeEach(function() {
    chai.spy.on(domUpdates, 'rightAnswer', () => true);
  })
  afterEach(function() {
    chai.spy.restore(domUpdates);
  })
  it('should have an instance of Player with a name and default score of 0', function() {
    let player = new Player('Carl');

    expect(player.score).to.equal(0);
  })
  it('should be able to increase its score', function () {
    let player = new Player('Bam', 100);

    player.increaseScore(400);
    expect(player.score).to.equal(500);
  })
})