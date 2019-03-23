import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js'
import Player from '../src/Player.js';
import Round from '../src/Round.js';

chai.spy.on(domUpdates, ['displayRoundData', 'displayCorrectGuess'], () => true);  

describe('Game', () => {
  
  it('Should have a default active player of player1', () => {
    let game = new Game();

    expect(game.activePlayer).to.equal(game.player1);
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
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.player1.name).to.equal('Bob');
    expect(game.player2.name).to.equal('Bobette');
  });

  it('Should increment the round number when new rounds are started', () => {
    let game = new Game();

    game.startNewRound();
    game.startNewRound();

    expect(game.currentRound).to.equal(2);
  });

  it('Should increment the round number when new rounds are started', () => {
    let game = new Game();

    game.startNewRound();
    game.startNewRound();

    expect(game.currentRound).to.equal(2);
  });



  //Will start a regular round if on round 1 or 2
  //Will start a special round if on round 3
  //Will end the game 
});