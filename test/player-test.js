import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js'

describe ('Player', function() {
  it('should have an instance of Player', function() {
    let player = new Player;
  })
  it('should be able to have a name', function () {
    let player = new Player('Carl');

    expect(player.name).to.equal('Carl');
  })
  it('should start with a default score of 0', function () {
    let player = new Player('Frank');

    expect(player.score).to.equal(0);
  })
  it('should be able to change its score', function () {
    let player = new Player('Bam');

    player.changeScore();

    expect(player.score).to.equal(1);
  })
})