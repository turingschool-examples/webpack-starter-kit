import chai from 'chai'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js'
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['displayCategories', 'renderClue'], () => true);


describe ('Round', function() {
  let round;
  beforeEach(function() {
    round = new Round(); 
  });

  it('should have default properties', function () {
    expect(round.clues).to.deep.equal(round.clues, []);
    expect(round.currentPlayer).to.deep.equal(round.currentPlayer, {});
  });

  it('should find clues', function() {
    let id = 4;
    let pointVal = 300;
    let mockEvent = {};

    round.findClue(id, pointVal, mockEvent); 
    expect(domUpdates.renderClue(param1, param2)).to.be.called(clue);
  })

})