import chai from 'chai'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js'
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['displayCategories', 'renderClue'], () => true);

let mockClues = [{
      question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
      pointValue: 100,
      answer: "golf",
      categoryId: 10
    },
    {
      question: "One of the most popular shows on the Food Network is \"The Essence of\" him",
      pointValue: 200,
      answer: "Emeril",
      categoryId: 10
    },
    {
      question: "The Eulogy\" is HBO's e-mail newsletter devoted to this series",
      pointValue: 300,
      answer: "Six Feet Under",
      categoryId: 10
    }];
let mockIds = [1, 2, 3, 4]

describe ('Round', function() {
  let round;
  beforeEach(function() {
    round = new Round(mockIds, mockClues); 
  });

  it('should have default properties', function () {
    expect(round.clues).to.deep.equal(round.clues, []);
    expect(round.currentPlayer).to.deep.equal(round.currentPlayer, {});
  });

  it('should find clues', function() {
    let id = 10;
    let pointVal = 300;
    let mockEvent = {};
    
    round.findClue(id, pointVal, mockEvent); 
    expect(domUpdates.renderClue).to.be.called();
  })

})