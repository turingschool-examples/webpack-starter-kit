import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js'

chai.spy.on(domUpdates, ['displayRoundQuestion', 'updatePlayersDom'], () => true);  

describe('Game', () => {

  // beforeEach(function() {
  //   chai.spy.on(domUpdates, 'updatePlayersDom', () => true);
  // });

  // afterEach(function() {
  //   chai.spy.restore(domUpdates); 
  // });
  

  it('Should have a default current player of 1', () => {
    let game = new Game();

    expect(game.currentPlayer).to.equal(1);
  });

  it('Should have a default current round of 0', () => {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
  });

  it('Should have a property of usedSurveys that defaults to an empty array', () => {
    let game = new Game();

    expect(game.usedSurveys).to.deep.equal([]);
  });

  it('Should have a property of surveyData that contains surveys and answers', () => {
    let game = new Game();

    expect(game.surveyData.surveys.length > 0).to.equal(true);
    expect(game.surveyData.answers.length > 0).to.equal(true);
  });

  it('Should be able to instantiate two new players when names are submitted', () => {
    let game = new Game();

    game.setPlayers('Bob', 'Bobette');

    expect(domUpdates.updatePlayersDom).to.have.been.called();
    expect(domUpdates.updatePlayersDom).to.have.been.called.with('Bob', 'Bobette');
  });

  it('Should reset the current round to 1 when a new game starts', () => {
    let game = new Game();

    game.startNewRound('Why tho?', ['Just cus']);
    game.startNewRound('But...?', ['I SED JUST CUZ']);

    expect(game.currentRound).to.equal(2);

    game.startNewGame();

    expect(game.currentRound).to.equal(1);
  });

  //Will start a regular round if on round 1 or 2
  //Will start a special round if on round 3
  //Will end the game 
});