import $ from 'jquery';





export default {

  hiddenBoard(playersArr){

    $('.game-area').removeClass("hidden");
    $('.name-entry').addClass("hidden");
    playersArr.forEach((player, ind) => {
      $('#player' + ([ind + 1])).text(player.name);
    })

  },

  playerNames () {
    let players = ([$('#player1-input').val(), $('#player2-input').val(), $('#player3-input').val()]);
    console.log(players)
    return players;
  }


}