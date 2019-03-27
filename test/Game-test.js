import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';
import FastRound from '../src/FastRound.js';
import domUpdates from '../src/domUpdates.js'

chai.spy.on(domUpdates, [
  'resetPageDefaults',
  'displayRoundData', 
  'displayPlayer1', 
  'displayPlayer2',
  'blurGuessInput',
  'removeTimers'
], () => true);  

describe('Game', () => {

  it('Should have a default current round of 0', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.currentRound).to.equal(0);
  });

  it('Should have a property of usedSurveys that defaults to an empty array', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.usedSurveys).to.deep.equal([]);
  });

  it('Should have a property of surveyData that contains surveys and answers', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.surveyData.surveys.length > 0).to.equal(true);
    expect(game.surveyData.answers.length > 0).to.equal(true);
  });

  it('Should instantiate two new players when names are submitted', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.player1.name).to.equal('Bob');
    expect(game.player2.name).to.equal('Bobette');
  });

  it('Should have a default active player of player1', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.activePlayer.name).to.equal('Bob');
  });

  it('Should be able to switch turns between players', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.activePlayer.name).to.equal('Bob');

    game.toggleActivePlayer();

    expect(game.activePlayer.name).to.equal('Bobette');
  });

  it('Should instantiate a new round as a new game property when a new round is started', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    game.triggerNewRound();

    expect(game.round).to.be.instanceOf(Round);
  });

  it('Should increment the round number when new rounds are started', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    game.triggerNewRound();
    game.triggerNewRound();

    expect(game.currentRound).to.equal(2);
  });

  it('Should get a random survey for each round and remove it from the usable list of surveys', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    expect(game.surveyData.surveys.length).to.equal(15);

    game.getSurvey();

    expect(game.surveyData.surveys.length).to.equal(14);
  });

  it('Should start a special round when the round number reaches 3 with a timer and score multiplier', () => {
    let game = new Game(new Player('Bob'), new Player('Bobette'));

    game.triggerNewRound();
    game.triggerNewRound();

    expect(game.currentRound).to.equal(2);
    expect(game.round).to.be.instanceOf(Round);

    game.triggerNewRound();

    expect(game.currentRound).to.equal(3);
    expect(game.round).to.be.instanceOf(FastRound);
  });

  //not sure how we can test endGame since it's all dom updates
  
});