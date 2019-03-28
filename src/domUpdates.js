import $ from 'jquery';
import Game from './Game.js';
import Round from './Round.js';

export default {

  clearInputField() {
   $('.answerInput').val('');
  },

  errorMessage() {
    $('.errorMessage').css('visibility', 'visible');
  },

  removeErrorMessage() {
    $('.errorMessage').css('visibility', 'hidden');
  },

  wrongAnswer() {
    $('.wrongAnswer').css('visibility', 'visible');
  },

  removeWrongAnswer() {
    $('.wrongAnswer').css('visibility', 'hidden');
  },

  tryAgain() {
    $('.tryAgain').css('visibility', 'visible');
  },

  removeTryAgain() {
    $('.tryAgain').css('visibility', 'hidden');
  },

  tryAgain() {
    $('.tryAgain').css('visibility', 'visible');
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

  highlightPlayer(playerId) {
    if(playerId === 1) {
      console.log('toggle', 'player1highlight')
      $('#nameOne').css('width', '300px');
      $('#nameOne').css('height', '80px');
      $('#nameOne').css('border-radius', '1%');
      $('#nameOne').css('box-shadow','inset 0 0 50px #fff, 0 0 50px red, -10px 0 80px blue, 10px 0 80px #fff');
    }

    if(playerId === 2){
      console.log('toggle', 'player2highlight')
      $('#nameTwo').css('width', '300px');
      $('#nameTwo').css('height', '80px');
      $('#nameTwo').css('border-radius', '1%');
      $('#nameTwo').css('box-shadow','inset 0 0 50px #fff, 0 0 50px red, -10px 0 80px blue, 10px 0 80px #fff'); 
    } 
  },

  unhighlightPlayer(playerId) {
     if(playerId === 1) {
      $('#nameOne').css('box-shadow', 'none');
    }
    if(playerId === 2) {
      $('#nameTwo').css('box-shadow', 'none');
    }
  },

  changeScore(score, playerId) {
    if(playerId === 1) {
      $('#scoreOne').text(score);
    }

    if(playerId === 2) {
      $('#scoreTwo').text(score);
    }  
  },

  progressBar(roundNumber) {
    console.log('roundnumber',roundNumber);
    if(roundNumber === 1){
      $('#progress').html('<progress id="bar" max="100" value="25"> </progress>');
    } else if(roundNumber === 2) {
      $('#progress').html('<progress id="bar" max="100" value="50"> </progress>');
      $('#round').text("Round 2");
    } else if(roundNumber === 3) {
      console.log('happy');
      $('#progress').html('<progress id="bar" max="100" value="75"> </progress>');
      $('#round').text("Lightning ⚡ Round");
    } else if(roundNumber === 4) {
     $('#progress').html('<progress id="bar" max="100" value="100"> </progress>');
     $('#round').text("Lightning ⚡ Round");
   }
  },

  appendAnswer(answerSet, answer, respondents) {
    let space = '\u00A0';
    let spaces = space.repeat(85);

    if(answerSet[0].answer === answer) {
      $('#responseOne').text('');
      $('#responseOne').append(`${answer}${spaces}${respondents}`);
    }

    if(answerSet[1].answer === answer) {
      $('#responseTwo').text('');
      $('#responseTwo').append(`${answer}${spaces}${respondents}`); 
    }

    if(answerSet[2].answer === answer) {
      $('#responseThree').text('');
      $('#responseThree').append(`${answer}${spaces}${respondents}`); 
    }
  },

  // counterOne() {
  //   $('#counterOne').append(`<label class="progressLabel" for="bar">Player 1 Counter:</label> 
  //         <progress id="bar1" max="100" value="0"> </progress>`);
  // },

  //  counterTwo() {
  //   $('#counterTwo').append(`<label class="progressLabel" for="bar">Player 2 Counter:</label> 
  //         <progress id="bar2" max="100" value="0"> </progress>`);
  // },


  winnerMessage(player1, player2) {
    console.log('winner', player1.score);
    console.log('winner', player2.score);

    if(player1.score > player2.score){
     $('.winnerMessage').append(`<h1 class="winner">${player1.name}IS THE WINNER!</h1>
      <h3>Want To Play Again?</h3>
      <button id="newGameBtn">New Game</button>
      `);
    } else {
      $('.winnerMessage').append(`<div id='winner'><h1 class="winner">${player2.name}, you're the WINNER!</h1>
        <h3>Want To Play Again?</h3>
        <button id="newGameBtn">New Game</button></div>`);
    }
  },


  }
