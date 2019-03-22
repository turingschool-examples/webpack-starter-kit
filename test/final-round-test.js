import chai from 'chai';
const expect = chai.expect;

import FinalRound from '../src/FinalRound.js';
import Game from '../src/Game.js'

describe('Final Round', function () {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be an instance of Final Round', function () {
    const finalRound = new FinalRound(game);
    expect(finalRound).to.be.instanceof(FinalRound);
  });
});