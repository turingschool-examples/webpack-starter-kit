import $ from 'jquery';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    });
  },
  renderCategories(categories) {
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(category);
    })
  }

  // setCategory(ids) {
  //   console.log("hi", ids)
  // },
}