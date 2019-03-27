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

 wrongAnswer() {
  $('.wrongAnswer').css('visibility', 'visible')
},

 removeWrongAnswer() {
  $('.wrongAnswer').css('visibility', 'hidden')
},

popUp() {
  $('.gamePopUp').append( `<section class="startGamePopUp">
   <h2>Welcome to Family Feud!</h2>
   <div class='playerNames'>
   <p>Please Enter Player Names.</p>
   <div class='popUpPlayers'>
   <label class="labelName">Player 1 Name</label>
   <input class="nameOne"></input>
   </div>
   <div class='popUpPlayers'>
   <label class="labelName">Player 2 Name</label>
   <input class="nameTwo"></input>
   </div>
   <button id="startBtn">Start Game</button>
   </section>`
   )},

  appendQuestion(question) {
    console.log(question);
    $('#surveyQuestion').text(question);
  },

  changeScore(score, playerId) {
     if(playerId === 1) {
        $('#scoreOne').text(score)   
        }
    if(playerId === 2) {
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
