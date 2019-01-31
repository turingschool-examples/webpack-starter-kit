const domUpdates = {
  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },
  displayPlayers: (playerArr) => {
    $('.player--one').text(playerArr[0]);
    $('.player--two').text(playerArr[1]);
    $('.player--three').text(playerArr[2]);
  }
}

export default domUpdates;