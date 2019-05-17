import chai from 'chai'
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Player from '../src/Player.js';

describe('Player', function() {
  let Player;
  beforeEach(function() {
    player = new Player();
  });

  it('should have default properties', function() {
   
  });
})