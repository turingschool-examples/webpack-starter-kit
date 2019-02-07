import chai from 'chai';
import Player from '../src/Player.js'
const expect = chai.expect;


describe('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('instantiates our good friend, Player', function() {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should have default parameters', () => {
    expect(player.totalScore).to.equal(0);
    expect(player.roundScore).to.equal(0);
    expect(player.gameWinner).to.equal(false);
    expect(player.currentTurn).to.equal(false);
  })

  it('should reset playuer\'s round score', function() {
    player.roundScore = 500;
    player.resetScore();
    expect(player.roundScore).to.equal(0);
  });

  it('should subtract 100 from player\'s round score when purchasing vowel', function() {
    player.roundScore = 500;
    player.buyVowel();
    expect(player.roundScore).to.equal(400);
  });

  it('should add winner\'s round score to total score', function() {
    player.roundScore = 500;
    player.totalScore = 500;
    player.winRound();
    expect(player.totalScore).to.equal(1000);
  });

  it('should declare a winner', function() {
    expect(player.gameWinner).to.equal(false);
    player.winGame();
    expect(player.gameWinner).to.equal(true);
  });
});
