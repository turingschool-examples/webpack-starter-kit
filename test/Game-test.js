import chai from 'chai';
const expect = chai.expect;

// import spies from 'chai.spies';
// chai.use(spies);

import Game from '../src/Game.js';
// import domUpdates from '../src/domUpdates.js'

// chai.spy.on(domUpdates, '', () => true)

describe('Game', () => {
  //remember to add chai spies before each and aftereach
  it('Should have a default current player of 1', () => {
    let game = new Game();

    expect(game.currentPlayer).to.equal(1);
  });

  it('Should have a default current round of 0', () => {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
  });

})