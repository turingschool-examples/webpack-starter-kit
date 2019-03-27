import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js'

chai.spy.on(domUpdates, [
  'displayPlayer1Score',
  'displayPlayer2Score'
], () => true);

describe('Player', () => {
  it('should have a name that can be specified', () => {
    let player = new Player('Tiffany');

    expect(player.name).to.equal('Tiffany');
  });

  it('should have a starting score of 0', () => {
    let player = new Player('Lynne');

    expect(player.score).to.equal(0);
  });

  it('should have a player number assigned at instantiation', () => {
    let player = new Player('Bob', 1);

    expect(player.player).to.equal(1);
  })

  it('should be able to increase score based on points being passed in', () => {
    let player = new Player('Jeremy', 2);

    expect(player.score).to.equal(0);

    player.increaseScore(67)

    expect(player.score).to.equal(67);
  });

  it('should be able to pass in a multiplier to increase points value', () => {
    let player = new Player('Jude', 1);

    expect(player.score).to.equal(0);

    player.increaseScore(67, 2)

    expect(player.score).to.equal(134);
  });
});

