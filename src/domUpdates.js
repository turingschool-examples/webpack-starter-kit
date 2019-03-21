import $ from 'jquery';

export default {
  renderNames(players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
    })
  }
}