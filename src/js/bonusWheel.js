import Wheel from './wheel';
import domUpdates from './domUpdates';

class BonusWheel extends Wheel {
  constructor() {
    super();
  }

  changePrizes() {
    this.values = ['trip to anatomy park', 'your own personal morty', 'a meeseeks box', 'a broken portal gun', 'butter-serving robot', 'one month interdimensional cable'];
    this.currentValue = super.randomizeValues(this.values).pop()
    domUpdates.revealPrize(this.currentValue);
    console.log(this.values)
  }
}

export default BonusWheel;