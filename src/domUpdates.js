import $ from 'jquery';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    });
  },
  renderCategories(categories) {
    console.log('hey')
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(category);
    })
  }

  // setCategory(ids) {
  //   console.log("hi", ids)
  //   // ids.forEach((id, index) => {
  //   //   $(`.val.btn-${index}`).forEach(elem => {	
  //   //     elem.id = id;	
  //   //   })
  //   // })
  // },
}