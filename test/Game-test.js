import Game from '../src/Game.js';
import Wheel from '../src/Wheel.js';
import Player from '../src/Player.js';
import data from '../src/Data.js'
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);

const expect = chai.expect
chai.spy.on(domUpdates, ['displayCategory', 'populateRoundPuzzle', 'revealGuessedLetter', 'updateRoundScore', 'disableButton', 'disableVowelButtons', 'enableSpinButton', 'disableConsonants', 'highlightActivePlayer', 'promptToSpin', 'displayPlayers', 'clearRoundPuzzle', 'updateTotalScore', 'displayRoundWinner', 'resetRoundScores', 'solvePuzzlePrompt', 'removeDisables', 'hideSpinButton', 'clickCounter', 'enableConsonants'], () => true);
 
describe('Game', function() {
  let game;
  let roundPuzzle;
  let wheel;
  let player1;
  let player2;
  let player3;

  beforeEach(function() {
    wheel = new Wheel();
    player1 = new Player('andy', 0, 0, 20);
    player2 = new Player('moses', 1, 0, 25);
    player3 = new Player('robby', 2, 0, 30);
    game = new Game();
    game.roundPuzzle = 'baseball';
  });  

  it('should start a new game', function() {

    expect(game.currentRound).to.equal(1);
    expect(game.activePlayer).to.equal(this.activePlayer);
    expect(game.roundWinner).to.equal(null);
    expect(game.gameWinner).to.equal(null);
    expect(game.gamePuzzles.length).to.equal(0);
    expect(game.players).to.equal(null)
  });

   it('should create set active player to player one', function() {
    let playersArray = ['jonny', 'adam', 'edgar']
    game.createPlayers(playersArray);
    expect(game.players.length).to.equal(3);
   })

  it('should create a huge bank of puzzles', function() {
    expect(game.grabPuzzleBanks().length).to.deep.equal(96)
  })

  it('should randomize an array of puzzles', function() {
    let array = [1, 2, 3, 4, 5]

    game.randomizeBank(array);

    expect(array).to.not.equal([1, 2, 3, 4, 5]);
  });

  it('should set five game puzzles', function() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    
    expect(game.setGamePuzzles(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should return one round puzzle', function() {
    let array= [0, 1, 2, 4];

    expect(game.setRoundPuzzle(array)).to.deep.equal(4)

    expect(array).to.deep.equal([0, 1, 2])
  });

  it('should return true if clicked letter is in a puzzle', function() {
    game.players = [player1, player2, player3]
    let letterCount = 0;
    let clickedLetter = 'B';
    game.activePlayer = player1;

    expect(game.compareClickedButton("B", wheel)).to.equal(true);
  })

  it('should change a players turn', function() {
    let players = [player1, player2, player3]
    let game = new Game(players)
    game.currentRound = 1;

    game.activePlayer === player1;
    game.changeTurn();
    expect(game.activePlayer).to.equal(player2);
  })

  it('compare an inputed answer to the puzzle answer', function() {
    game.players = [player1, player2, player3];
    game.activePlayer = player1;
    const correctAnswer = {
      category: 'dining',
      correct_answer: 'hot dog'
    }
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    
    game.gamePuzzles = array;
    // game.activePlayer.roundScore = 600;
    game.roundPuzzle = correctAnswer.correct_answer


    let inputedAnswer = 'hot dog'

    expect(game.compareFinalAnswer(inputedAnswer)).to.equal(true);

  })

  it('should go to the next round', function() {
    game.players = [player1, player2, player3]
    game.currentRound = 1
    const correctAnswer = {
      category: 'dining',
      correct_answer: 'hot dog'
    }
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    
    game.gamePuzzles = array;

    game.roundPuzzle = correctAnswer.correct_answer

    game.goToNextRound()

    expect(game.currentRound).to.equal(2);
  })

  it('should determine the winner after four rounds', function() {
    game.players = [player1, player2, player3]
    game.currentRound = 2
    expect(game.determineWinner()).to.deep.equal(player3)
  })


})  