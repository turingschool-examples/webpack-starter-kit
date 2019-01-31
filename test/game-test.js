import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/scripts/game.js';
import domUpdates from '../src/scripts/domUpdates.js';

chai.spy.on(domUpdates, 'displayPlayerNames', () => true);


describe('Testing Game methods', function() {
  it('should invoke displayPlayerNames', function() {
    let game = new Game();
    game.startGame();
    expect(domUpdates.displayPlayerNames).to.have.been.called(1);
  });
});