import data from './Data.js';
import Game from './Game.js';
import {changeTurn} from './Game.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js'

class Wheel {
  constructor(values = [], currentValue = 0, players =[]) {
    this.values = values,
    this.currentValue = currentValue,
    this.players = players
  }

  populateWheel(wheelValues) {
    this.values = wheelValues
    this.singleWheelValue(wheelValues)
  }

  singleWheelValue(wheelValues) {
    let sixVals = wheelValues.slice(0, 6)
    this.roundValue = sixVals;
  }

  getWheelValue(e, wheelOfFortune) {
    e.preventDefault();
    this.getRandomValue(wheelOfFortune);
    if (this.currentValue != 'BANKRUPT' && this.currentValue != 'LOSE A TURN') {
      domUpdates.disableSpinButton();
      domUpdates.enableConsonants();
    } else {
      domUpdates.enableSpinButton();
      domUpdates.disableConsonants();
    }
  }

  getRandomValue(wheelOfFortune) {
    const randomIndex = Math.floor((Math.random() * 22));
    this.currentValue = this.values[randomIndex];
    domUpdates.displayCurrentValue(this.currentValue, wheelOfFortune.activePlayer)
    this.bankrupt(wheelOfFortune);
    this.loseATurn(wheelOfFortune);
  }

  multiplyRoundValue(value) {
    let currentValue;
    if(this.currentValue === NaN) {
      currentValue = 0
    } else {
      currentValue = this.currentValue * value;
    }
    return currentValue;
  }

  bankrupt(wheelOfFortune) {
    if (this.currentValue === 'BANKRUPT') {
      wheelOfFortune.activePlayer.roundScore = 0;
      domUpdates.clearRoundScore(wheelOfFortune);
      wheelOfFortune.changeTurn(this.currentValue);
    }

  }
  loseATurn(wheelOfFortune) {
    if (this.currentValue === 'LOSE A TURN') {
      wheelOfFortune.changeTurn(this.currentValue);
    }
  }
}

export default Wheel;