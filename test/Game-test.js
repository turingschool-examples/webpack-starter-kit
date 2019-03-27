import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates';
import data from '../src/data';

const assert = chai.assert;
const expect = chai.expect;
chai.use(spies);

describe('Game', () => {

  beforeEach(function() {
    chai.spy.on(domUpdates, 'displayCurrentQuestion', () => true);
    chai.spy.on(domUpdates, 'startGame', () => true);
  });

  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be able to instantiate a new game', () => {
    let game = new Game({}, {});
    assert.instanceOf(game, Game);
  })

  it('should start at round 0', () => {
    const game = new Game();
    assert.equal(game.round, 0);
  });

  it('should accept an array of players', () => {
    const player1 = new Player('Jarrett', 1);
    const player2 = new Player('Brennan', 2);
    const game = new Game(player1, player2);

    assert.equal(game.players[0].name, 'Jarrett');
    assert.equal(game.players[1].name, 'Brennan');
  }); 

  //fails
  it('should start on player 1 when starting first round', () => {
    const player1 = new Player('Brennan');
    const player2 = new Player('Jarrett');
    const game = new Game(player1, player2, [1]);
    console.log(game.surveys);
    game.startNextRound();
    assert.equal(game.currentPlayer, player1);
  });

  //fails
  it('should accept an argument of an array', () => {
    const player1 = new Player('Brennan');
    const player2 = new Player('Jarrett');
    const game = new Game(player1, player2, [1, 2, 3]);
    assert.deepEqual(game.surveys, [1, 2, 3]);
  });

  //fails
  it('should be able to start the game and grab surveys', () => {
    const player1 = new Player('Brennan');
    const player2 = new Player('Jarrett');
    const game = new Game(player1, player2);
    game.startGame();
    assert.equal(game.surveys.length, 15)
  });

  it('should be able to shuffle surveys', () => {
    const player1 = new Player('Brennan');
    const player2 = new Player('Jarrett');
    let game = new Game(player1, player2);
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    game.shuffle(array);
    assert.notDeepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  //fails
  it('should start increment round upon initiation of game', () => {
    const player1 = new Player('Brennan');
    const player2 = new Player('Jarrett');
    const game = new Game(player1, player2);
    game.startGame();
    assert.equal(game.round, 1);
    expect(domUpdates.displayCurrentQuestion).to.have.been.called(1);
  });









  // should have round counter, nun, default 0 or 1
  // should have players, array, call createPlayers
  // should createPlayers, return [] of Players
  // should check guess 
  // should have startGame
  // should have nextRound
  // should have getWinner  

});