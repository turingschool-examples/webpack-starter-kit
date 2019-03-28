import $ from 'jquery';

export default {
// ** Start of Game ** //
// ====================//
  hidePopup(game) {
    $('.popup--active').addClass('fade-out__animation');
    $('.popup--active').delay(990).queue(function() {
      $(this).addClass('hidden')
    });
    this.appendNames(game)
  },
  appendNames(game) {
    game.players.map((player, index)=>{
      $(`.player-${index + 1}__name`).text(player.name)
    })
  },
// ** Player Based ** //
// ===================//
  updatePlayerScore(game) {
    game.players.map((player, index) => {
      $(`.player-${index + 1}__current-points`).text(`${player.roundCaps}`);
      $(`.player-${index + 1}__total-points`).text(`${player.totalCaps}`);
    })
  },
  showCurrentPlayer(game) {
    let currPlayer = game.currentRound.currentPlayer;
    $(`.player-${currPlayer.playerNum}__name`).toggleClass('big-red-border');
  },
// **   Input Based   ** //
// ===================//
  clearInput() {
    $('#guess--input').val('');
  },
  toggleButtons() {
    //Toggle: Consonant & Label
    if ($('#consonant').attr('value') === 'Spin Wheel' ) {
      $('#consonant').removeAttr('disabled').css('background-color', '#65AB55').attr('value', 'Guess Consonant')
      $('#guess--input').css('outline', 'yellow 3px solid');
    } else {
      $('#consonant').attr('disabled', 'true').css('background-color', 'gray').attr('value', 'Spin Wheel');
      $('#guess--input').css('outline', 'none');
    }
    //Toggle: Wheel
    $('.nav__wheel--button').attr("disabled") ? $('.nav__wheel--button').removeAttr("disabled") : $('.nav__wheel--button').attr("disabled", 'true');
    //Toggle: Word & Vowel
    if ($('.guess__word--button').attr("disabled") && $('#vowel').attr("disabled")) {
      $('.guess__word--button').removeAttr("disabled").css("background-color", "#65AB55");
      $('#vowel').removeAttr("disabled").css("background-color", "#65AB55");
    } else {
      $('.guess__word--button').attr("disabled", 'true').css("background-color", "gray");
      $('#vowel').attr("disabled", 'true').css("background-color", "gray");
    }
  },
  updateLettersUsed(game) {
    // TODO: Refactor
    let lettersRemaining = $('.letters__remaining');
    lettersRemaining.html('');
    let usedLetters = [];
    usedLetters = game.currentRound.allRoundGuesses.filter(letter => {
      return !usedLetters.includes(letter);
    })
    usedLetters.map(letter => {
      lettersRemaining.append(`<p class="used-letter used-${letter}"> ${letter},</p>`);
    });
  },
  updateRoundNumber(game) {
    game.currentRound.roundNumber === 5 ? $('#rnd-num').text("Bonus") 
      : $('#rnd-num').text(game.currentRound.roundNumber);
  },
  updateRoundHintCategory(game) {
    //category
    $('.hint__title').text(`Category: ${game.currentRound.roundPuzzle.cat}`);
    //hint
    $('.hint__value').text(`Hint: ${game.currentRound.roundPuzzle.description}`);
    this.updateRoundNumber(game);
  },
// ** Puzzle Board Based ** //
// =========================//
  appendPuzzle(game) {
    let valueBoard = $('.board__tile-value--container');
    valueBoard.html('');
    $('.letters__remaining').html('_');
    const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // console.log(game.currentRound.answer) puzzle array
    game.currentRound.answer.map((letter)=>{
      if (alphabetArr.includes(letter.toUpperCase())) {
        valueBoard.append(`<p class="ans-letter fade-in letter-${letter.toUpperCase()}">_</p>`);
      } else {
        valueBoard.append(`<p class="ans-letter fade-in nonLetter">${letter}</p>`);
        $('.nonLetter').css('background-color', 'gray');
      }
    })
  },
  createPuzzleClassArr(letter) {
    $(`.letter-${letter.toUpperCase()}`).text(letter.toUpperCase());
    $(`.letter-${letter.toUpperCase()}`).removeClass('fade-in')
    $(`.letter-${letter.toUpperCase()}`).addClass('fade-in-letter');
  },
  appendWinner(game) {
    let winner = game.currentRound.currentPlayer.name;
    let winningCaps = game.currentRound.currentPlayer.roundCaps;
    let answer = game.currentRound.wholeWord.join('');

    let footer = $('footer');
    footer.append(`<section class="winner-card fade-in"> The Winner is: ${winner} 
      <br> The Puzzle was: ${answer} 
      <br> ${winner} has won ${winningCaps} caps!<section>`);
    $('.winner-card').delay(6000).queue(function() {
      $(this).removeClass('fade-in');
      $(this).addClass('fade-out__animation');
    });
  },
  appendWheelValue(slice) {
    let animationContainer = $('.animation--container');

    if (Number.isInteger(slice)) {
      animationContainer.append(`<h2 class="prompt-img fade-in">${slice}</h2>`)
      $('.prompt-img').delay(2000).queue(function () {
        $(this).removeClass('fade-in');
        $(this).addClass('fade-out__animation');
      });
    }
  },
  appendCorrect() {
    let animationContainer = $('.animation--container');
    animationContainer.append(`<image class="prompt-img fade-in" src="./images/smartypants.png">`);
    $('.prompt-img').delay(1000).queue(function () {
      $(this).removeClass('fade-in');
      $(this).addClass('fade-out__animation');
    });
  },
  appendIncorrect() {
    let animationContainer = $('.animation--container');
    animationContainer.append(`<image class="prompt-img fade-in" src="./images/incorrect.png">`);
    $('.prompt-img').delay(1000).queue(function() {
      $(this).removeClass('fade-in');
      $(this).addClass('fade-out__animation');
    });
  },
  appendBankrupt() {
    let animationContainer = $('.animation--container');
    animationContainer.append(`<image class="prompt-img fade-in" src="./images/bankrupt.png">`);
    $('.prompt-img').delay(1000).queue(function() {
      $(this).removeClass('fade-in');
      $(this).addClass('fade-out__animation');
    });
  },
  appendLoseTurn() {
    let animationContainer = $('.animation--container');
    // eslint-disable-next-line max-len
    animationContainer.append(`<image class="prompt-img fade-in" src="./images/loseTurn.png">`);
    $('.prompt-img').delay(1000).queue(function() {
      $(this).removeClass('fade-in');
      $(this).addClass('fade-out__animation');
    });
  },
  displayPrize(prize) {
    $('.animation--container')
      .prepend(`<h4 class="prize--label">Guess Correct You'll Win:</h4>`);
    $('.animation--container')
      .prepend(`<p class="prize-title">${prize}</p>`);
    $('.animation--container')
      .append(`<img class="prize-img" src="./images/${prize}.png" />`);
  }
}
