import chai from 'chai'
const expect = chai.expect;

import Player from '../src/Player.js'

describe ('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('should have a name', function() {
    let player = new Player('Kayla')
    expect(player.name).to.equal('Kayla');
  });

  it('should start with a score of 0', function() {
    expect(player.score).to.equal(0);
  });

  it('should start out not being their turn', function() {
    expect(player.playerTurn).to.equal(false);
  });
})