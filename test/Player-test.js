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

  it ('Should be able to change score', function() {
    let player = new Player('Michael', 500);

    expect(player.score).to.equal(500);
    expect(player.name).to.equal('Michael');
  })

  it('Should always have the playerBank start at 0', function() {
    let player = new Player('Brittany', 1000000);

    expect(player.name).to.equal('Brittany');
    expect(player.score).to.equal(1000000);
    expect(player.playerBank).to.equal(0)
  })
})