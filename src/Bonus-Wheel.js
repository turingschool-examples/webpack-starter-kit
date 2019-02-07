import Wheel from './Wheel.js';
import domUpdates from './domUpdates.js';

class BonusWheel extends Wheel {
  constructor(values, turnValue = '', players) {
    super(values, turnValue, players)

  }

  newButton() {
    domUpdates.hideSpinButton(this);
    console.log(this)
  }

  bonusSpin() {
    console.log('im spinning the bonus wheel')
    this.values = ['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!']
    // console.log(this.values)
    // console.log(this.turnValue)
    const randomIndex = Math.floor(Math.random() * 2) + 1;
    console.log(randomIndex);
    this.turnValue = this.values[randomIndex];
    // console.log(this.turnValue)
    domUpdates.displayBonusPrize(this.turnValue)
    domUpdates.disableBonusSpinButton();
    domUpdates.enableConsonants()
    domUpdates.bonusLetters();
  }

}

export default BonusWheel;