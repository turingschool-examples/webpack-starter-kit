const domUpdates = {
 
  removeStartPage() {
    $('.hidden').removeClass('hidden');
    $('.start-page').remove();
    $('.solve-puzzle-section').toggleClass('hidden');
  },

  solvePuzzlePrompt() {
    $('.solve-puzzle-section').toggleClass('hidden');
  },

  displayPlayers(p1, p2, p3) {
      $('#player-names-0').text(p1.name);
      $('#player-names-1').text(p2.name);
      $('#player-names-2').text(p3.name);
  },

  displayCategory(roundPuzzle) {
    $('.category-window').text(roundPuzzle.category)
  },

  showHiddenPuzzle() {
    //we're gonna grab the puzzle.correct_answer
  },

  populateRoundPuzzle(roundPuzzle) {
    // console.log(lettersArray);
    // if roundPuzzle.number_of_words === 1
    let letters = roundPuzzle.toUpperCase().split('')

    letters.forEach((letter, i) => {
      $(`#box-${i + 13}`).text(letter)
    })

    this.hideRoundPuzzle(letters);
  },

  hideRoundPuzzle(letters) {
    console.log('im a hidden puzzle')

    letters.forEach((letter, i) => {
      if(letter != ' ' && letter != '-' && letter != '\'' && letter != '&') {
        $(`#box-${i + 13}`).addClass('hidden-word')
      }
    })
  },

  clearRoundPuzzle(roundPuzzle) {
    let letters = roundPuzzle.toUpperCase().split('')

    letters.forEach((letter, i) => {
      $(`#box-${i + 13}`).text('').removeClass('hidden-word').removeClass('correct-letter')
    })
  },

  displayLetters(consonants, vowels) {
    // $('#consonants-bank').text(consonants);
    consonants.forEach((cons,i) => {
      $(`#c${i}`).text(cons).addClass('unavailable-bank-letter').prop('disabled', true);
      // console.log(cons)
    })

    vowels.forEach((vowel,i) => {
      $(`#v${i}`).text(vowel).addClass('unavailable-bank-letter');
      // console.log(vowel)
    })
  },

  displayTurnValue(value, activePlayer) {
    // let turnValue = wheel.turnValue
    $('#spin-value').text(`${activePlayer.name}, you landed on: ${value}!`)
  },

  updateRoundScore(value, num) {
    $(`#player-${num}-round-score`).text(value)
  },

  clearRoundScore(wheelOfFortune) {
    console.log(wheelOfFortune)
    $(`#player-${wheelOfFortune.activePlayer.playerNumber}-round-score`).text(0)
  },

  disableButton(clickedButton) {
    $(clickedButton).removeClass('unavailable-bank-letter')
    $(clickedButton).addClass('disabled-bank-letter')
    console.log(clickedButton)
  },

  removeDisables() {
    $('.letter-button').removeClass('disabled-bank-letter');
  },
 
  revealGuessedLetter(letter, button) {
    let numbers = [];
    for(let i = 0; i < 53; i++) {
      numbers.push(i);
    }

    // console.log(numbers);
    console.log(letter)
    console.log(button)

    numbers.forEach(number => {
      // console.log($(`#box-${number}`).text());

      if($(`#box-${number}`).text() === letter) {
        $(`#box-${number}`).removeClass('hidden-word')
        $(`#box-${number}`).addClass('correct-letter')
      }
    })
  },

  highlightActivePlayer(players) {
    players.forEach(player => {
      if (player.active === true) {
        $(`#player-box-${player.playerNumber}`).addClass('active-player')
      } else if (player.active !== true) {
        $(`#player-box-${player.playerNumber}`).removeClass('active-player')
      }
    })
  },

  enableConsonants() {
    $('.letter-button').prop('disabled', false);
  },

  disableConsonants() {
    $('.letter-button').prop('disabled', true);
  },

  enableVowelButtons() {
    $('.vowel-button').prop('disabled', false);
    $('.vowel-button').removeClass('unavailable-bank-letter');
  },

  disableVowelButtons() {
    $('.vowel-button').prop('disabled', true);
    $('.vowel-button').addClass('unavailable-bank-letter');
  },

  disableSpinButton() {
    $('#spin-button').prop('disabled', true);
  },

  enableSpinButton() {
    $('#spin-button').prop('disabled', false);
  },

  promptToSpin(players) {
    players.forEach(player => {
      if (player.active === true) {
        console.log('its your turn')
        $(`#player-prompts-${player.playerNumber}`).text('ITS YOUR TURN! SPIN, BUY A VOWEL, OR SOLVE THE PUZZLE')
      } else {
        if (player.active === false) {
          $(`#player-prompts-${player.playerNumber}`).text(' ');
        }
      }
    })
  },

  displayRoundWinner(winner) {
    console.log(winner.name);
    window.alert(`${winner.name} Won The Round! Go To Next Round!`)
    $('#solve-puzzle-input').val('');
  },

  updateTotalScore(player, num) {
    $(`#player-${num}-total-score`).text(player.roundScore)
  },

  resetRoundScores(players) {
    players.forEach((player,i) => {
      console.log(i);
      $(`#player-${i}-round-score`).text(0)
    })
  }

  // showWinner(name) {
  //   $('#game-winner-display').text(`${name} won this round!`);
  // }

}

export default domUpdates;