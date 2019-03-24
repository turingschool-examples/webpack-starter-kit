import $ from 'jquery';
import Game from './Game.js';

export default {
  updatePlayerNames(names) {
      $(".player-one-name").text(names[0].name);
      $(".player-two-name").text(names[1].name);
      $(".player-three-name").text(names[2].name);
      $("input").remove();
  }

  // appendCategoryNames() {
  //   const categoryOne = document.getElementByClassName('category-one');
  //   console.log(categoryOne)
  //   categoryOne.innerText = game.roundOneCategories[0];
  // }
}