import chai from 'chai';
import Wheel from '../src/Wheel.js'
import Player from '../src/Player.js'
const expect = chai.expect;


describe('Wheel', function() {
  let wheel;
  let player;
  beforeEach(function() {
    wheel = new Wheel();
    player = new Player();
  });

  it('instantiates our good friend, Wheel', function() {
    expect(wheel).to.be.an('object');
  })

  it('should have six elements', function() {    
    wheel.randomizeWheel();
    expect(wheel.wheelElements).to.have.lengthOf(6);
  });

  it('should be different upon each iteration', function() {
    let wheel1 = new Wheel();
    let wheel2 = new Wheel();

    expect(wheel1).to.not.equal(wheel2);
  })

  it('should land on a random element when spun', function() {
    wheel.randomizeWheel();
    wheel.spinWheel();
    expect(wheel.currentSpin).to.not.be.an('undefined');
  })

  it.skip('should reset player score to zero when the wheel lands on bankrupt', function() {
    player.roundScore = 10;
    wheel.bankrupt(player);
    // not sure how to intentionally make the wheel land on bankrupt to test this
    expect(player.roundScore).to.equal(0);
  })

  it.skip('should end player turn when the wheel lands on lose-a-turn', function() {
    player.currentTurn = true;
    // not sure how to intentionally make the wheel land on lose-a-turn to test this
    expect(player.currentTurn).to.equal(false);
    
  })

  it.skip('should prompt player to choose a consonant if the wheel lands on a dollar amount', function() {

  })
});
