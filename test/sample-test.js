import chai from 'chai';
import Player from '../src/Player.js'
const expect = chai.expect;

describe('Player', function() {
  it('should have a name', function() {
    let player = new Player('Bob');
    expect(player.name).to.equal('Bob');
  });

  it('should have a score of 0 as default', function() {
    let player = new Player('Kevin');
    expect(player.score).to.equal(0);
  });

  it('should have an empty array of correct answers by default', function(){
    let player = new Player('Kirby')
    expect(player.correctAnswers.length).to.equal(0);
  });
});
