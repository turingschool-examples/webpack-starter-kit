import chai from 'chai';
import Player from '../src/js/player';

const expect = chai.expect;

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('should have a default name', () => {
    let player = new Player('Nim');
    expect(player.name).to.equal('Nim');
  });

  it('should have a default answer', () => {
    let player = new Player('Pickle Rick', 'true')
    expect(player.answer).to.equal('true');
  });

  it('should have a default currentScore of 0', () => {
    expect(player.currentScore).to.equal(0);
  });

  it('should have a default totalScore', () => {
    expect(player.totalScore).to.equal(0);
  });
})