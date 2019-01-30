let domUpdates = {
  getPlayerInput() {
    new Player(document.querySelector('.js-player-one-input').value);
    new Player(document.querySelector('.js-player-two-input').value);
    new Player(document.querySelector('.js-player-three-input').value);
  }
}

module.exports = domUpdates;