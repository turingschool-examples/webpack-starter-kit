import Game from "./Game.js";
import Player from "./Player.js"
import $ from 'jquery';
import './index.js'

const domUpdates = {

  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },

  displayPlayers: (a, b, c) => {
    $('.player--one').text(a);
    $('.player--two').text(b);
    $('.player--three').text(c);
  },

  displayPlayerScore: (player1, player2, player3) => {
    $('.player--one--score').text(player1.score);
    $('.player--two--score').text(player2.score);
    $('.player--three--score').text(player3.score);
  },

  enableReset: () => {
    $('.game--exit').prop( "disabled", false);
  },

  disableReset: () => {
    $('.game--exit').prop( "disabled", true);
  },

  setClues: (clues) => {
    $('.game--board').empty();
    clues.forEach(clue => {
      $('.game--board').append(`
        <h4
        data-categoryid="${clue.categoryId}" 
        data-pointvalue="${clue.pointValue}">
        ${clue.pointValue}
        </h4>`)
    });
  },

  displayCategories: (array) => {
    $('.category--one').text(array[0]);
    $('.category--two').text(array[1]);
    $('.category--three').text(array[2]);
    $('.category--four').text(array[3]);
  },
  
  displayClue: (question) => {
    $('.game--container').toggleClass('game--inactive');
    $('body').append(`
    <div class="popup--container clue--container">
      <h2>${question}</h2>
      <input type="text" placeholder="Place Answer Here"/>
      <button class="submit--guess">Submit Guess</button>
    </div>
    `);
  },
  
  hidePopUp: () => {
    $('.game--container').toggleClass('game--inactive');
    $('.clue--container').remove();
  }
  
}

export default domUpdates;