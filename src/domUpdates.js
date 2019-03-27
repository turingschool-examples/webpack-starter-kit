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

  appendAnswer(answerSet, answer, respondents) {
      console.log(answer)
      console.log(respondents)
      console.log(answer[1])
      console.log(respondents[1])
      console.log(answerSet[1])
     

    if(answerSet[0].answer === answer) {
      $('#responseOne').text('');
       $('#responseOne').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`);
    }
    
    if(answerSet[1].answer === answer) {
      $('#responseTwo').text('');
      $('#responseTwo').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`); 
    }

    if(answerSet[2].answer === answer) {
      $('#responseThree').text('');
     $('#responseThree').append(`${answer}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${respondents}`); 
  }

  },

}
