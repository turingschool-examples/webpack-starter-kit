import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';
import domUpdates from '../src/domUpdates.js'

chai.spy.on(domUpdates, ['displayRoundData', 'displayCorrectGuess'], () => true);  

describe('Game', () => {
  
  it('Should have a default active player of 1', () => {
    let game = new Game();

    expect(game.activePlayer).to.equal(1);
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

  it('Should instantiate two new players when names are submitted', () => {
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

  it('Should be able to generate a random number between one and the total number of surveys', () => {
    let game = new Game();
    const randoId = game.getRandomSurveyId();

    expect(randoId).to.be.at.least(1);
    expect(randoId).to.be.at.most(game.surveyData.surveys.length);
  });

  // it('Should start a special round when the round number reaches 3 with a timer and score multiplier', () => {
  //   let game = new Game();

  //   game.startNewRound();
  //   game.startNewRound();
  //   game.startNewRound();

  //   expect(game.currentRound).to.equal(3);
    
  //   expect(game.FastRound.timer).to.equal(30);
  //   expect(game.FastRound.multiplier).to.equal(2);
  // });

  // it('Should end the game when all the answers of round 3 are guessed, and should not increment beyond 3.', () => {
  //   let game = new Game();
 
  //   game.startNewRound();
  //   game.startNewRound();
  //   game.startNewRound();

  //   expect(game.currentRound).to.equal(3);

  //   game.startNewRound();
    
  //   expect(game.currentRound).to.equal(3);
  // });
  
});