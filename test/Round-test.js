import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';

import DomUpdates from '../src/DomUpdates.js'
import Game from '../src/Game.js';
import Round from '../src/Round.js'

// import Wheel from '../src/Wheel.js'
chai.use(spies);

describe('Round', function() {
  let round;

  beforeEach(function () {
    round = new Round();
  });

  chai.spy.on(DomUpdates, ['clearGameBoard', 'updateGameScore'], () => true)

  it('Should return true', function() {
    expect(true).to.equal(true);
  });

  it('Round to be an object', function () {
    expect(round).to.be.deep.equal({ "activePlayer": 0, "clueAnswer": null, "letterIndexs": [], "remainingLetters": [], "roundClue": {}, "wheelInst": {  "selectedValue": 0,   "wheelValues": [], }
    });
  })

  it('should be instance of round', function() {
    expect(round).to.be.an.instanceof(Round)
  });

  it('should have correct default properties', function () {
    expect(round.clueAnswer).to.deep.equal(null);
    expect(round.roundClue).to.deep.equal({});
    expect(round.activePlayer).to.deep.equal(0);
    expect(round.letterIndexs).to.deep.equal([]);
    expect(round.remainingLetters).to.deep.equal([]);
  });

});