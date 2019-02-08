import Wheel from '../src/Wheel.js'
import Game from '../src/Game.js'
import Player from '../src/Player.js'
import data from '../src/Data.js'
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);


const expect = chai.expect
chai.spy.on(domUpdates, 'clearRoundScore', () => true);
 
describe('Wheel', function() {
  let player1 =  new Player('andy', 1, 500)
  let player2 = new Player('danny', 2, 400)
  let game = new Game(player1);
  let wheel = new Wheel();

  it('should have default wheel values', function() {
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentValue).to.equal(0);
    expect(wheel.players).to.deep.equal([])
  })


  it('should instantiate a new wheel', function() {
    wheel = new Wheel([1, 2, 3, 4, 5, 6, 7, 8], 600);
    expect(wheel.values).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(wheel.currentValue).to.equal(600);
  });

  it('should populate the wheel with all wheel values but randomized', function() {
    let array = [1,2,3,4,5,6,7,8,9]
    wheel.populateWheel(array);
    expect(wheel.values.length).to.equal(9);
    expect(wheel.values).to.not.equal([1,2,3,4,5,6,7,8]);
  });

  it('should multiply the round value', function() {
    let value = 5;
    wheel.currentValue = 10;
    expect(wheel.multiplyRoundValue(value)).to.equal(50);
  });

  it('should clear score if bankrupt', function() {
    game.activePlayer = player1;
    wheel.currentValue = 'BANKRUPT';
    wheel.bankrupt(game)
    expect(game.activePlayer.roundScore).to.equal(0)
  })

  it('should make a player lose a turn', function() {
    game.activePlayer = player1
    wheel.currentValue = 'LOSE A TURN'
    wheel.loseATurn(game)

    expect(game.activePlayer).to.equal(player2)
  })

})  