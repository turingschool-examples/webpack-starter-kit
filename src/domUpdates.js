import Game from "./Game";

const domUpdates = {

  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },

  displayPlayers: (playerArr) => {
    let one = $('.player--input1').val();
    let two = $('.player--input2').val();
    let three = $('.player--input3').val();
    game.gatherPlayers(one, two, three);
    $('.player--one').text(playerArr[0]);
    $('.player--two').text(playerArr[1]);
    $('.player--three').text(playerArr[2]);
  }
}

export default domUpdates;