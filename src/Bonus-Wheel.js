import Wheel from './Wheel.js';

class BonusWheel extends Wheel {
  constructor(values, turnValue, players) {
    super(values, turnValue, players)


  }

  bonusSpin(){
    let bonusValues = ['A BRAND NEW CAR!', '$25,000', 'A TRIP TO THE BASEMENT!']
    this.values = bonusValues;
    console.log(this.values)
  }
}

export default BonusWheel;