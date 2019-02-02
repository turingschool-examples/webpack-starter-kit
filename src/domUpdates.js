import Game from './Game.js'

export default{
  grabNames: function () {
    let players = ([$('#player1').val(), $('#player2').val(), $('#player3').val()]);
    return players;
  },
  loadGameBoard: function (arr) {
    $('.entry-page').attr('class','game-board-area');
    $('.intro-page').attr('class', 'entry-page');
    arr.forEach((player,ind) => {
        $('#player' + ([ind + 1]) + '-name-text').text(player.name);
    })
  }
}

