import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';

describe('Player', function() {
  it('Should have a default name of Joe', function() {
    let player = new Player();

    expect(player.name).to.equal('Joe');
  })

  it('Should be able to asign the player a name', function() {
    let player = new Player('Michael');

    expect(player.name).to.equal('Michael');
  })

  it('Should have default score of 0', function() {
    let player = new Player();

    expect(player.score).to.equal(0);
  })
})