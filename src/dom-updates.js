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
// **   UI Based   ** //
// ===================//
  clearInput() {
    $('#guess--input').val('');
  },
  toggleButtons(game) {
    //Toggle: Consonant & Label
    $('#consonant').attr('value') == '^ Spin Wheel ^' 
      ? $('#consonant').removeAttr('disabled').css('background-color', 'darkgreen').attr('value', 'Guess Consonant')
      : $('#consonant').attr('disabled', 'true').css('background-color', 'gray').attr('value', '^ Spin Wheel ^');
    //Toggle: Wheel
    $('.nav__wheel--button').attr("disabled") ? $('.nav__wheel--button').removeAttr("disabled") : $('.nav__wheel--button').attr("disabled", 'true');
    //Toggle: Word & Vowel
    if ($('.guess__word--button').attr("disabled") && $('#vowel').attr("disabled")) {
      $('.guess__word--button').removeAttr("disabled").css("background-color", "darkgreen");
      $('#vowel').removeAttr("disabled").css("background-color", "darkgreen");
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
      lettersRemaining.append(`<p class="used-letter used-${letter}"> ${letter},</p>`)
    });
    // lettersRemaining.text(game.currentRound.allRoundGuesses);
  },
  updateRoundNumber(game) {
    $('#rnd-num').text(game.currentRound.roundNumber)
  },
  updateRoundHintCategory(game) {
    // console.log(game.currentRound.roundPuzzle);
    //category
    $('.hint__title').text(`Category: ${game.currentRound.roundPuzzle.cat} | `);
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
      }
      else {
        valueBoard.append(`<p class="ans-letter fade-in nonLetter">${letter}</p>`);
        $('.nonLetter').css('background-color', 'gray')
      }
    })
  },
  createPuzzleClassArr(letter) {
    $(`.letter-${letter.toUpperCase()}`).text(letter.toUpperCase());
    $(`.letter-${letter.toUpperCase()}`).addClass('fade-in-letter')
  },
}
