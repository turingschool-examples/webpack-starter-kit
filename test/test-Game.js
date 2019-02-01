import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';
// import '../scr/index.js';

describe('Game', function() {

beforeEach(function() {
  let game = new Game; 
})

  it('Make Sure Testing is working', function() {
    expect(true).to.equal(true);
      });

  it('it should instantiate new players', function() {
    // 
    let $names = ['tim', 'taylor', 'bill'];
    let player1 = new Player($names[0]);
    let player2 = new Player($names[1]);
    let player3 = new Player($names[2]);
    game.createPlayers($names);
    expect(this.players).to.equal(['tim', 'taylor', 'bill']);
  })

})