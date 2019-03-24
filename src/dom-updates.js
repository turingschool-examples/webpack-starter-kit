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
    game.players.map((player, ind) => {
      $(`.player-${ind + 1}__round-points`).text(player.roundCaps);
      $(`.player-${ind + 1}__totals-points`).text(player.totalCaps);
    });
  },
  updateRoundHintCategory(game){
    console.log(game.currentRound.roundPuzzle);
    //category
    $('.hint__title').text(`Category: ${game.currentRound.roundPuzzle.cat} | `);
    //hint
    $('.hint__value').text(`Hint: ${game.currentRound.roundPuzzle.description}`);
  }
}