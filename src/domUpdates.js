import $ from 'jquery';
import Game from './Game.js';
import Round from './Round.js';




export default {

 clearInputField() {
   $('.answerInput').val('')
 },

 errorMessage() {
  $('.errorMessage').css('visibility', 'visible')
},

popUp() {
  $('.gamePopUp').append( `<section class="startGamePopUp">
   <h2>Welcome to Family Feud!</h2>
   <div class='playerNames'>
   <p>Please enter player names.</p>
   <div class='popUpPlayers'>
   <label for="">Player 1 Name</label>
   <input class="nameOne"></input>
   </div>
   <div class='popUpPlayers'>
   <label for="">Player 2 Name</label>
   <input class="nameTwo"></input>
   </div>
   <button id="startBtn">Start Game</button>
   </section>`
   )},

  // appendQuestion() {

  // },

  changeScore(score, currentPlayer) {
     if(score && currentPlayer.playerId === 1) {
        $('#scoreOne').text(score)   
        }
    if(score && currentPlayer.playerId === 2) {
          $('#scoreTwo').text(score) 
        }    
  },

  // appendAnswer(answer, respondents) {
  //   if()//answer is at index 0
  //   $('.class').text('');
  //   $('class').append(`${answer} 
  // if()//answer is at index 1
  //   $('.class').text('');
  //   $('class').append(`${answer} 
  // if()//answer is at index 2
  //   $('.class').text('');
  //   $('class').append(`${answer} ${respondents}`);
  // },

}
