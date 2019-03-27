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

  progressBar(roundNumber) {
    console.log('roundnumber',roundNumber);
    if(roundNumber === 1){
      $('#progress').html('<progress id="bar" max="100" value="25"> </progress>');
    } else if(roundNumber === 2){
       $('#progress').html('<progress id="bar" max="100" value="50"> </progress>');
       $('#round').text("Round 2");
    } else if(roundNumber === 3){
       $('#progress').html('<progress id="bar" max="100" value="=75"> </progress>');
       $('#round').text("Lightning ⚡ Round");
    } else if(roundNumber === 4){
       $('#progress').html('<progress id="bar" max="100" value="100"> </progress>');
       $('#round').text("Lightning ⚡ Round");
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
