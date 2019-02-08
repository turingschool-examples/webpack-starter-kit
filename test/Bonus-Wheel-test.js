import BonusWheel from '../src/Bonus-Wheel.js'
import Player from '../src/Player.js'
import data from '../src/Data.js'
import chai from 'chai';
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);

const expect = chai.expect;
chai.spy.on(domUpdates, ['displayBonusPrize', 'disableBonusSpinButton', 'bonusLetters'], () => true );

describe('Bonus-Wheel', function() {
  let bonusWheel
  let player

  it('should set a bonus value', function() {
    player = new Player('adam')
    bonusWheel = new BonusWheel(['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!'], 'silver', player, 0)
    bonusWheel.bonusSpin();
    expect(bonusWheel.values).to.deep.equal(['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!'])
  })

  it('should increment counter on a click', function() {
    bonusWheel = new BonusWheel(['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!'], 'silver', player, 0)
    bonusWheel.onlyThreeClicks();
    expect(bonusWheel.counter).to.equal(1);
  })
})