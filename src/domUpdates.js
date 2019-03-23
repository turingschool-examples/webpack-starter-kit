import $ from 'jquery';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    })
  },

  setCategoryIds(ids){
    ids.forEach((id, index) => {
      $(`val.btn.${index}`).forEach(elem => {
        elem.id = id;
      }
    });
    const valBtn = $()
  },
}