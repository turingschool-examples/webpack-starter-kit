
import $ from 'jquery';
import Player from "./Player.js";

export default {

  hiddenBoard(playersArr) {
    $('.game-area').removeClass("hidden");
    $('.name-entry').addClass("hidden");
    playersArr.forEach((player, ind) => {
      $('#player' + ([ind + 1])).text(player.name);
    });

  },

  playerNames () {
    let players = ([$('#player1-input').val() || "Gorgnax", $('#player2-input').val() || "Flumbib", $('#player3-input').val() || "Xerox"]);
    return players;
  },

  resetGame () {
    location.reload();
  },

  fillSpace(puzzleLength, end) {
    const extraSpace = 14 - puzzleLength;
    const fill = extraSpace / 2;
    // debugger
    if (extraSpace % 2 === 0) {
      this.appendFill(fill + 1);
    } else {
      return end ? this.appendFill(fill + 1.5) : this.appendFill(fill + .5);
    }
  },

  appendFill (spaces) {
    let emptyTile = `<div class="puz-grid end"></div>`;
    for (let i = 0; i < spaces; i++) {
      $(`.puzzle`).append(emptyTile);
    }
  },

  appendWords (puzzleLine) {
    let tileClass;
    puzzleLine.forEach(character => {
      if (character === ' ' || character === '-' || character === '&' ) {
        tileClass = 'space';
      } else {
        tileClass = character;
      }
      $(`.puzzle`).append(`<div class="puz-grid secret ${tileClass}">${character} </div>`);
    });
  },

  appendPuzzle (line1, line2) {
    this.fillSpace(line1.length, false);
    this.appendWords(line1);
    this.fillSpace(line1.length, true);
    if (line2 !== null) {
      $(`.puzzle`).addClass('two-line');
      this.fillSpace(line2.length, false);
      this.appendWords(line2);
      this.fillSpace(line2.length, true);
    }
  },

  displaySolvedPuzzle() {
    $('.secret').removeClass('secret');
  },


  setCategoryText(category) {
    $('.clue-container').text(category)
  },

  spinWheel(game) {
    let clicks = 1;
    const winner = Math.round(Math.random() * 21);
    /*multiply the degree by number of clicks
    generate random number between 1 - 360, 
    then add to the new degree*/
    const extraDegree = (21 - winner) * 36;
    const spinAgain = (1800 * clicks) + extraDegree;
    const totalDegree = Math.round(spinAgain / 36) * 150;
    let wheel = game.round.currentWheel
    // debugger
    wheel.spinWinner(winner, game.round);
    clicks++;
    $('#inner').css({
      'transform': 'rotate(' + totalDegree + 'deg)'
    });
    this.spinResultMessage(wheel.currentSpin);
    $('#wheel').removeClass('pulse');
  },

  updateActivePlayer(oldPlayer, newPlayer, player) {
    $(`#player${oldPlayer}-area`).removeClass('active');
    $(`#player${newPlayer}-area`).addClass('active'); 
    $('#wheel').addClass('pulse').delay(600);
    this.yourTurnMessage(player);
  },
  
  spinAgainPrompt() {
    $('.spin-winner').text(`spin again, buy a vowel, or solve the puzzle`).fadeIn(800);
  },
  
  spinResultMessage(spinResult) {
      $('.spin-winner').html(`You spun ${spinResult}! Choose a letter.`);
    },


  yourTurnMessage(player) {
    $('.spin-winner').html(`${player.name}'s turn to spin!`);
  },
  
  solvePuzzleMessage(player) {
    $('.spin-winner').html(`${player.name} solved the puzzle!`);
    
  }
  // chooseLetterMessage() {
    
    // }
    
  displayCorrectLetter(puzzle, guess) {
      puzzle.forEach((letter) => {
        if (letter === guess) {
          // debugger
          $(`.${letter}`).removeClass('secret');
        } 
      });
    },
    
    buyAVowel(event, game) {
      $('.vowels').on('click', (event) => {
        $( '.vowels').removeClass( "cost");
        // round.players[round.activePlayer].roundScore -= 100;
        game.round.guessLetter(event, game);
      });
    },
    
    displayScore(player, total) {
      $(`#player-${player}-round`).text(`Score: ${total}`);
  },
  
  checkSolution(event, game) {
    event.preventDefault();
    let guess = $('.solve-input').val();
    // console.log(guess);
    game.round.handleSolutionGuess(guess);
    guess = $('.solve-input').val('');
  }




}