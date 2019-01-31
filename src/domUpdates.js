import Game from "./Game";

const domUpdates = {

  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },

  displayPlayers: (game) => {
    let one = $('.player--input1').val();
    let two = $('.player--input2').val();
    let three = $('.player--input3').val();
    game.gatherPlayers(one, two, three);
    $('.player--one').text(game.players[0]);
    $('.player--two').text(game.players[1]);
    $('.player--three').text(game.players[2]);
  }
}

export default domUpdates;