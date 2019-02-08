import Wheel from './Wheel.js';
import domUpdates from './domUpdates.js';

class BonusWheel extends Wheel {
  constructor(values=[], currentValue = '', player, counter = 0) {
    super(values, currentValue, player)
      
  }

  newButton() {
    domUpdates.hideSpinButton(this);
    // console.log(this)
    this.onlyThreeClicks();
  }

  bonusSpin() {
    // console.log('im spinning the bonus wheel')
    this.values = ['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!']
    const randomIndex = Math.floor(Math.random() * 2) + 1;
    this.currentValue = this.values[randomIndex];
    domUpdates.displayBonusPrize(this.currentValue)
    domUpdates.disableBonusSpinButton();
    domUpdates.enableConsonants()
    domUpdates.bonusLetters();
    console.log(this.player)
  }

  onlyThreeClicks() {
    domUpdates.clickCounter(this);
    this.counter++
    // console.log(this.counter)
    if(this.counter >= 4) {
      domUpdates.disableConsonants();
    }
    domUpdates.enableConsonants();
  }

}

export default BonusWheel;