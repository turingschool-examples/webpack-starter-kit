import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js'
import domUpdates from  '../src/domUpdates';
import Clue from '../src/Clue.js'
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['hidePopUp'], () => true);

describe('Clue', function() {
  it('should check answer', function() {
    let mimic = {
      question: "What MTV plays 24 hours a day",
      pointValue: 100,
      answer: "music videos",
      categoryId: 10
    };
    let game = new Game();

    game.gatherPlayers('jim','bob','jill');

    let clue = new Clue(mimic.question, mimic.pointValue, mimic.answer, mimic.categoryId);

    clue.correctAnswer(game, 'music videos');
    expect(game.currentPlayer.score).to.deep.equal(100);
    expect(domUpdates.hidePopUp).to.be.called();

    clue.correctAnswer(game, 'false');
    expect(game.currentPlayer.score).to.deep.equal(0);
    expect(domUpdates.changePrompt).to.be.called();
    expect(domUpdates.hidePopUp).to.be.called();
  });
});