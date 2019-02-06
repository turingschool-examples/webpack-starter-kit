import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js'
import domUpdates from  '../src/domUpdates';
import Clue from '../src/Clue.js'
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['displayPlayerScore', 'toggleSplash', 'displayCategories', 'displayClue','setClues', 'resetPlayersScores', 'changePrompt'], () => true);

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should instantiate a new game', function() {
    expect(game).to.be.an.instanceof(Game);
    expect(game.players).to.be.an('array');
    expect(game.currentPlayer).to.deep.equal(null);
    expect(game.winner).to.deep.equal(null);
    expect(game.allCluesInPlay).to.be.an('array');
    expect(game.counter).to.deep.equal(0);
    expect(game.roundOne).to.deep.equal(null);
    expect(game.roundTwo).to.deep.equal(null);
    expect(game.roundThree).to.deep.equal(null);
  });

  it('should switch between players', function() {;
    game.gatherPlayers('bob', 'jim', 'tom');
  
    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[1]);

    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[2]);

    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[0]);
  });
  
  it('should gather players into players array and set current player', function() {;
    game.gatherPlayers('a', 'b', 'c');
    
    expect(game.players).to.deep.equal([{name:'a', score: 0}, {name:'b', score: 0}, {name:'c', score: 0}]);
    expect(game.currentPlayer).to.equal(game.players[0]);
    expect(domUpdates.displayPlayerScore).to.be.called();
  });

  it('should pick random categories from data', function() {
    game.getRandomCat();

    expect(game.roundOne.length).to.deep.equal(4);
    expect(game.roundTwo.length).to.deep.equal(4);
    expect(game.roundThree.length).to.deep.equal(1);
    expect(domUpdates.displayCategories).to.be.called();
  });

  it('should instantiate a new clue', function() {
    game.getRandomCat();
    game.initiateRound();
    game.instantiateClue({categoryid: "9", pointvalue: "100"});

    expect(game.currentClue).to.be.an.instanceof(Clue);
    expect(domUpdates.displayClue).to.be.called();
  });

  it('should toggle ur splash screen & set our all clues to none', function() {

    game.quitGame();

    expect(domUpdates.toggleSplash).to.be.called();
    expect(game.allCluesInPlay).to.deep.equal([]);
    expect(game.players).to.deep.equal([]);
    expect(game.counter).to.deep.equal(0);
  });

  it('should submit our guess', function() {
    let mimic = {
      question: "What MTV plays 24 hours a day",
      pointValue: 100,
      answer: "music videos",
      categoryId: 10
    };

    game.currentClue = new Clue(mimic.question, mimic.pointValue, mimic.answer, mimic.categoryId);

    game.gatherPlayers('tom', 'tim', 'jill')
    game.submitGuess('hey');
    
    expect(domUpdates.toggleSplash).to.be.called();

    game.switchPlayer()
    
    expect(game.currentPlayer).to.deep.equal(game.players[1]);
  });

});


