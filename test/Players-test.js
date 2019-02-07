import Player from '../src/Players';
import domUpdates from '../src/domUpdates';

import chai from 'chai';
const expect = chai.expect;
let assert = require('chai').assert
import spies from 'chai-spies';
chai.use(spies);
chai.spy.on(domUpdates, ["correctAns", "wrongAns", "updateScore"], () => true)
chai.spy.on(Player, "validAns", () => true)

///////////////////
// * ^imports^ * //
///////////////////

describe('Players', () => {
  
  it('should be a function', () => {
    assert.isFunction(Player);
  });
  
  it('should instantiate a player', () => {
    const player = new Player();
    
    assert.isObject(player);
  });
  
  it('should have a name', () => {
    const player = new Player('Squirtle');
    
    assert.equal(player.name, 'Squirtle');
  });
  
  it('should have player score by default', () => {
    const player = new Player('charmander');
    
    assert.equal(player.score, 0);
  });
  
  it('should increase player score when correct answer', () => {
    const player = new Player('Squirtle');
    const scoreBefore = player.score;
    const scoreAfter = player.score;
    const difference = scoreAfter + scoreBefore;
    expect(player.score).to.equal(difference);
  });
});