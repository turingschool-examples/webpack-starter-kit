import $ from 'jquery';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    }) 
  },
  setCategory(ids) {
    console.log("hi", ids)
  },
  
//    setCategoryIds(ids){
//     ids.forEach((id, index) => {
//       $(`val.btn.${index}`).forEach(elem => {
//         elem.id = id;
//       }
//     });
//     const valBtn = $()
//   },
}