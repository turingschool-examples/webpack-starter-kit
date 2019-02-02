import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';


describe('Game', function() {

beforeEach(function() {
  
  chai.spy.on(domUpdates, ['getNames', 'displayNames'], () => true);
})

afterEach(function() {
  chai.spy.restore(domUpdates);
})

  it('Make Sure Testing is working', function() {
    expect(true).to.equal(true);
      });

  it('should get names from inputs', function() {
    let inputNames = ['taylor', 'tim', 'bob'];
    domUpdates.getNames(inputNames);
    expect(domUpdates.getNames).to.have.been.called.with(['taylor', 'tim', 'bob']);
  })

  it ('should display names on the DOM', function() {
    let passedNames = ['taylor', 'tim', 'bob']
    domUpdates.displayNames(passedNames);
    expect(domUpdates.displayNames).to.have.been.called.with(['taylor', 'tim', 'bob']);
  });

  it ('should instantiate three new Players', function() {
    let game = new Game;
    let $names = ['tim', 'taylor', 'bill'];
    game.createPlayers($names)
    expect(game.players).to.equal([{ name: 'tim', round: 0, total: 0 }, { name: 'taylor', round: 0, total: 0 }, { name: 'bill', round: 0, total: 0 }]);
    //expecting game.players to have a value of an array of Player objects. 
  });

})