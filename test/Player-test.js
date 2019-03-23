import chai from 'chai';
import Player from '../src/Player.js'
const expect = chai.expect;

describe('Player', function() {
  let player;

  beforeEach(function() {
    player = new Player('Bob');
  });
  it('should have a name', function() {
    
    expect(player.name).to.equal('Bob');
  });

  it('should have a score of 0 as default', function() {
    expect(player.score).to.equal(0);
  });

  it('should have an empty array of correct answers by default', function(){
    expect(player.correctAnswers.length).to.equal(0);
  });
});