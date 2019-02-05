import Gameboard from './gameboard.js';
// import './css/base.css';
import $ from 'jquery';

const domUpdates = {

  labelCategories([firstRoundCategories], [secondRoundCategories], [finalRoundCategory]) {
    //in domupdates, make them real english words
    //add forEach here to iterate through category list to append names
    // if (game.round === 1) 
      let $category1 = firstRoundCategories[0];
      $('#category-0').text($category1);
      let $category2 = firstRoundCategories[1];
      $('#category-1').text($category2);
      let $category3 = firstRoundCategories[2];
      $('#category-2').text($category3);
      let $category4 = firstRoundCategories[3];
      $('#category-3').text($category4);
  },

  removeStartScreen() {
    let $inputScreen = $(".input-fields");
    $inputScreen.addClass("remove-display");
  },

  // updatePlayerScores() {
  //   let $player1Score = $("#scoreBox1");
  //   let $player2Score = $("#scoreBox2");
  //   let $player3Score = $("#scoreBox3");
  // }
}

export default domUpdates;

