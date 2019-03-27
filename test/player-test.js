import chai from 'chai';
import Player from '../src/js/player';

const expect = chai.expect;

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('should have a default name', () => {
    let player = new Player('Pickle Rick', 'true')
    expect(player.name).to.equal('Pickle Rick');
    expect(player.answer).to.equal('true');
    expect(player.currentScore).to.equal(0);
    expect(player.totalScore).to.equal(0);
  });
})