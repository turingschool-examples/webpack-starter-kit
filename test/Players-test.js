import Player from '../src/Players';
import domUpdates from '../src/domUpdates';

import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);
chai.spy.on(domUpdates, ["correctAns", "wrongAns", "updateScore"], () => true)
chai.spy.on(Player, "validAns", () => true)

describe('Players', () => {
  
  it('should be a function', () => {
    const player = new Player()
    expect(player).to.be.a('object');
  });
  
  it('should instantiate a player', () => {
    const player = new Player();
    
    expect(player).to.be.an.instanceOf(Player);
  });
  
  it('should have a name', () => {
    const player = new Player('Squirtle');
    
    expect(player.name).to.equal('Squirtle');
  });
  
  it('should have player score by default', () => {
    const player = new Player('charmander');
    
    expect(player.score).to.equal(0);
  });
  
  it('should increase player score when correct answer', () => {
    const player = new Player('Squirtle');
    const scoreBefore = player.score;
    const scoreAfter = player.score;
    const difference = scoreAfter + scoreBefore;
    expect(player.score).to.equal(difference);
  });
});