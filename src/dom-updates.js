import $ from 'jquery';

export default {
  hidePopup(game) {
    $('.popup--active').addClass('hidden');
    this.appendNames(game)
  },
  appendNames(game) {
    game.players.map((player, index)=>{
      $(`.player-${index + 1}__name`).text(player.name)
    })
  },
  updatePlayerScore(game) {
    let currPlayer = game.currentRound.currentPlayer;

    $(`.player-${currPlayer.playerNum}__current-points`).text(`$ ${currPlayer.roundCaps}`);
    $(`.player-${currPlayer.playerNum}__totals-points`).text(`$ ${currPlayer.totalCaps}`);
  },
  updateRoundHintCategory(game) {
    console.log(game.currentRound.roundPuzzle);
    //category
    $('.hint__title').text(game.currentRound.roundPuzzle.cat);
    //hint
    $('.hint__value').text(game.currentRound.roundPuzzle.description);
  }
}