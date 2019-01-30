import Game from '../src/Game.js'
import chai from 'chai'

const expect = chai.expect
 
describe('Game', function() {

it('should instantiate a new game', function(){
  let game = new Game(1);
  expect(game.currentRound).to.equal(1)
})


})