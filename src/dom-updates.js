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
  }
}