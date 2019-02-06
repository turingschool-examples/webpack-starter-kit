import data from './data.js';
import Player from './Player.js';

class Wheel {
  constructor() {
      this.wheelElements = [];
      this.currentSpin = null;
      this.currentSpinIndex = null;
  }
  randomizeWheel() {
    let elementsArray =[];
    for(let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * data.wheel.length);
      elementsArray.push(data.wheel[randomIndex]);
    }
    this.wheelElements = elementsArray;
  }
  spinWheel(player) {
    this.currentSpinIndex = Math.floor(Math.random() * 5);
    this.currentSpin = this.wheelElements[this.currentSpinIndex];
    this.displayElement();
    if (this.currentSpin === 'BANKRUPT') {
      console.log('youve gone bankrupt');
    } else if (this.currentSpin === 'LOSE-A-TURN') {
      console.log('youve lost a turn');
    }
    // if land on bankrupt invoke bankrupt method
    // if land on lose a turn invoke loseTurn method
  }
  displayElement() {
    $('.hidden-popup').fadeIn();
    if (typeof(this.currentSpin) === 'string') {
      console.log('string');
    }
    $('.hidden-popup').append('<p>' + this.currentSpin + '</p>');
    $('.hidden-popup').append('<button class="remove-popup">OK</button>');
    // alert(this.currentSpin);
    $(".remove-popup").on("click", () => {
      console.log('clicked');
      this.hideElement();
    });
  }
  hideElement() {
    $('.hidden-popup').fadeOut();
    $('.hidden-popup').html('');
  }
  bankrupt(player) {
    // reset player roundScore to 0
  }
  loseTurn(player) {
    // end player turn
    // switch to next player
  }
};

export default Wheel;