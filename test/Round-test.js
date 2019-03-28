import Round from "../src/Round.js";
import Player from "../src/Player.js";
import Game from "../src/Game.js";
import Wheel from "../src/wheel.js"
import data from "../src/data.js"
import chai from 'chai';
import spies from 'chai-spies';
import domUpdates from "../src/domUpdates.js";
chai.use(spies);
const expect = chai.expect;
chai.spy.on(domUpdates, ['turnOrder', 'buyAVowel', 'displayScore', 'displayCorrectAnswers', 'displaySolvedPuzzle', 'updateActivePlayer'], () => true);
chai.spy.on(domUpdates, ['playerNames'], () => ["name", "name", "name"]);

describe('Round', () => {
  let round;
  let player1 = new Player();
  let player2 = new Player();
  let players = [player1, player2];
  let game = new Game();
  let wheel = new Wheel()
  let letter = `<div>e</div>`;

  beforeEach(() => {
    round = new Round(players);

  });
  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have default properties', () => {
    expect(round.activePlayer).to.equal(0);
    expect(round.roundCountDown).to.equal(0);
  });



  it('should change activePlayer', () =>{
    expect(round.activePlayer).to.equal(0);
    round.changeActivePlayers();
    expect(round.activePlayer).to.equal(1);
  });



//needs to be written VVVV ////
  it('should update activePlayers score', () =>{
    let currentPlayer = round.players[round.activePlayer];
    expect(currentPlayer._roundScore).to.equal(0);
    round.updatePlayerScore(100);
    expect(currentPlayer._roundScore).to.equal(100);
  });

  it('should check if a guess is a vowel or consonant', () =>{
    game.startGame();
    // game.createRound(wheel);
    // game.getRandomData();
    round.guessLetter(letter, game);
    expect(round.vowelGuess).to.have.been.called();
   
  });

  // it('should check if a guess is correct', () =>{
   
  // });

  // it('update the totalScore of the roundWinner', () =>{
    
  // });



});



