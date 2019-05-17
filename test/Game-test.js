import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Game from '../src/Game.js';

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should have default properties', function() {
   
  });
})