import Game from '../src/Game.js'
import data from '../src/Data.js'
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);

const expect = chai.expect
chai.spy.on(domUpdates, ['displayCategory', 'populateRoundPuzzle'], () => true);
 
describe('Game', function() {
  let game;

beforeEach(function() {
  game = new Game();
});  

  it('should instantiate a new game', function() {

    expect(game.currentRound).to.equal(1);
    expect(game.activePlayer).to.equal(this.activePlayer);
    expect(game.roundWinner).to.equal(null);
    expect(game.gameWinner).to.equal(null);
    expect(game.gamePuzzles.length).to.equal(0);
    expect(game.players).to.equal(null)
  });

  it('should create a huge bank of puzzles', function() {
    expect(game.grabPuzzleBanks().length).to.deep.equal(96)
  })

  it('should randomize an array of puzzles', function() {
    let array = [1, 2, 3, 4, 5]

    game.randomizeBank(array);

    expect(array).to.not.equal([1, 2, 3, 4, 5]);
  });

  it('should set four game puzzles', function() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    
    expect(game.setGamePuzzles(array)).to.deep.equal([1, 2, 3, 4])
  })

  it('should return one round puzzle', function() {
    let array= [0, 1, 2, 4];

    expect(game.setRoundPuzzle(array)).to.deep.equal(4)

    expect(array).to.deep.equal([0, 1, 2])
  });

})  