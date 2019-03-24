import $ from 'jquery';
import Game from './Game.js';

export default {
  updatePlayerNames(names) {
      $(".player-one-name").text(names[0].name);
      $(".player-two-name").text(names[1].name);
      $(".player-three-name").text(names[2].name);
      $("input").remove();
  },

  appendCategoryNames(game) {
    const fancyCategoryNames = [];
    game.roundOneCategories.forEach(category => {
      if (category.includes('unitedStatesHistory')) {
        fancyCategoryNames.push('United States History')
      } else if (category.includes('lifeSciences')) {
        fancyCategoryNames.push('Life Sciences')
      } else if (category.includes('publicHealth')) {
        fancyCategoryNames.push('Public Health')
      } else if (category.includes('educationJargon')) {
        fancyCategoryNames.push('Education Jargon')
      } else if (category.includes('nameThatBoardGame')) {
        fancyCategoryNames.push('Name That Board Game')
      } else if (category.includes('americanLiterature')) {
        fancyCategoryNames.push('American Literature')
      } else if (category.includes('biographies')) {
        fancyCategoryNames.push('Biographies')
      } else if (category.includes('americanCities')) {
        fancyCategoryNames.push('American Cities')
      } else if (category.includes('food')) {
        fancyCategoryNames.push('Food')
      } else {
        fancyCategoryNames.push('Cable TV')
      }
    });
      console.log(fancyCategoryNames);
      $(".category-one").text(fancyCategoryNames[0]);
      $(".category-two").text(fancyCategoryNames[1]);
      $(".category-three").text(fancyCategoryNames[2]);
      $(".category-four").text(fancyCategoryNames[3]);
  }
}

    // const showNames = [ 'Food', 'Cable TV'];
