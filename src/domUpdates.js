import Puzzle from "./Puzzle.js";
import Round from "./Round.js";

import $ from 'jquery';

export default {

  hiddenBoard(playersArr) {

    $('.game-area').removeClass("hidden");
    $('.name-entry').addClass("hidden");
    playersArr.forEach((player, ind) => {
      $('#player' + ([ind + 1])).text(player.name);
    })

  },

  playerNames () {
    let players = ([$('#player1-input').val(), $('#player2-input').val(), $('#player3-input').val()]);
    return players;
  },

  resetGame () {
    location.reload();
  },



  // $('.submit-guess').click(checkPuzzle());
  
  // checkPuzzle() {
  //   let round1 = new Round();
  // }
  appendPuzzle (splitPuzzle) {
    let tileClass;
       $(`.puzzle`).append(`<div class="puz-grid space "></div>`)
    splitPuzzle.forEach(index => {
      console.log(index);
      let puzzleTile = `<div class="puz-grid ${tileClass} ">${index} </div>`;
      if (index === ' ') {
        tileClass = 'space';
      } else {
        tileClass = index;
      }
      $(`.puzzle`).append(puzzleTile);
    });
       $(`.puzzle`).append(`<div class="puz-grid space "></div>`)

  }






  // for example:
  //    var finalWager = `<section class="final-question-display">
  //       <h1>FINAL JEOPARDY</h1>
  //       <h4 class="cat-0"></h4>
  //       <button class="final-wager-button">Place your bets!</button>
  //       <div class= "final-wager-input">
  //         <input type="number" class="player 0 wager">
  //         <input type="number" class="player 1 wager">
  //         <input type="number" class="player 2 wager">
  //       </div>
  //     </section>`;
  //     $('.question-box-area').html(finalWager);

//      $('.word-box').append(<div>letter</div>)
//     question.answer.split('').forEach(letter => {
// $('.word-box').append(<div>letter</div>))
// $('.word-box').append(<div>letter</div>)

  // <div class="word-box">
  // ---new ones here----
  // </div>

}