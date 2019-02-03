import data from './Data.js';
import Game from './Game.js';
import Player from './Player.js';


class Wheel {
  constructor(values = [], turnValue = 0, players) {
    this.values = values,
    this.turnValue = turnValue,
    this.players = players
  }

  populateWheel(wheelValues) {
    this.values = wheelValues
    this.singleWheelValue(wheelValues)
    console.log(this.values)
    console.log(this.roundValue);
  }

  //a player selected value
  singleWheelValue(wheelValues) {
    let sixVals = wheelValues.slice(0, 6)
    this.roundValue = sixVals;
    console.log(this.roundValue)
    console.log(data.wheel);
  }

  getWheelValue(e) {
    e.preventDefault();
    console.log(this.values)
    //22 indexis
    this.getRandomValue();
  }

  getRandomValue() {
    const randomIndex = Math.floor((Math.random() * 22) + 1);
    this.turnValue = this.values[randomIndex];
    console.log(this.turnValue);
    //disable buttons
  }
}

export default Wheel;