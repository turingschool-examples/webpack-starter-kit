import chai from 'chai';
import BonusPlayer from '../src/BonusPlayer.js'
const expect = chai.expect;


describe('Bonus Player', function() {
  let bonusPlayer;
  beforeEach(function() {
    bonusPlayer = new BonusPlayer();
  });

  it('instantiates our good friend, Bonus Player', function() {
    expect(bonusPlayer).to.be.an('object');
  })

});
