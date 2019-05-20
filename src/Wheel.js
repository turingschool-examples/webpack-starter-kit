import Data from './Data';

class Wheel {

  createWheel() {
    const randomWheel = this.shuffleWheel(Data.wheel);
    this.values = randomWheel;
  }

  shuffleWheel(wheel) {
    for (let i = wheel.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [wheel[i], wheel[random]] = [wheel[random], wheel[i]];
    }
  }

  returnResult() {
    const randomIndex = Math.floor(Math.random() * this.values.length + 1);
    return this.values.find(value => this.values.indexOf(value) === randomIndex)
  }
}

export default Wheel;