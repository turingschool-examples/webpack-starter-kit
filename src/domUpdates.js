const domUpdates = {
 
  removeStartPage() {
    $('.hidden').removeClass('hidden');
    $('.start-page').remove();
    $('.solve-puzzle-section').toggleClass('hidden');
    $('#bonus-spin-btn').addClass('hidden');
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

  populateRoundPuzzle(roundPuzzle) {
    let letters = roundPuzzle.toUpperCase().split('')

    letters.forEach((letter, i) => {
      $(`#box-${i + 13}`).text(letter)
    })

    this.hideRoundPuzzle(letters);
  },

  hideRoundPuzzle(letters) {
    letters.forEach((letter, i) => {
      if(letter !== ' ' && letter !=='-' && letter !=='\'' && letter !== '&') {
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
    consonants.forEach((cons,i) => {
      $(`#c${i}`).text(cons).addClass('unavailable-bank-letter').prop('disabled', true);
    })

    vowels.forEach((vowel,i) => {
      $(`#v${i}`).text(vowel).addClass('unavailable-bank-letter');
    })
  },

  displayCurrentValue(value, activePlayer) {
    $('#spin-value').text(`${activePlayer.name}, you landed on: ${value}!`)
  },

  updateRoundScore(value, num) {
    $(`#player-${num}-round-score`).text(value)
  },

  clearRoundScore(wheelOfFortune) {
    $(`#player-${wheelOfFortune.activePlayer.playerNumber}-round-score`).text(0)
  },

  disableButton(clickedButton) {
    $(clickedButton).removeClass('unavailable-bank-letter')
    $(clickedButton).addClass('disabled-bank-letter')
  },

  removeDisables() {
    $('.letter-button').removeClass('disabled-bank-letter');
  },
 
  revealGuessedLetter(letter, button) {
    let numbers = [];
    for(let i = 0; i < 53; i++) {
      numbers.push(i);
    }

    numbers.forEach(number => {
      if($(`#box-${number}`).text() === letter) {
        $(`#box-${number}`).removeClass('hidden-word')
        $(`#box-${number}`).addClass('correct-letter')
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
        $(`#player-prompts-${player.playerNumber}`).text('ITS YOUR TURN! SPIN, BUY A VOWEL, OR SOLVE THE PUZZLE')
      } else {
        if (player.active === false) {
          $(`#player-prompts-${player.playerNumber}`).text(' ');
        }
      }
    })
  },

  displayRoundWinner(winner) {
    window.alert(`${winner.name} Won The Round! Go To Next Round!`)
    $('#solve-puzzle-input').val('');
  },

  updateTotalScore(player, num) {
    $(`#player-${num}-total-score`).text(player.roundScore)
  },

  resetRoundScores(players) {
    players.forEach((player,i) => {
      $(`#player-${i}-round-score`).text(0)
    })
  },

  hideSpinButton(bonuswheel) {
    $('#spin-button').remove();
    $('#bonus-spin-btn').removeClass('hidden');
    $('#bonus-spin-btn').on('click', bonuswheel.bonusSpin);
  },

  displayBonusPrize(prize) {
    $('.bonus-popup').text(`YOUR BONUS PRIZE IS ${prize}`);
  },

  disableBonusSpinButton() {
    $('#bonus-spin-btn').prop('disabled', true)
  },

  bonusLetters() {
    let numbers = [];
    for(let i = 0; i < 53; i++) {
      numbers.push(i);
    }

    const lettersArray = ['R', 'S', 'T', 'L', 'N', 'E']

    numbers.forEach(number => {
      if(lettersArray.includes($(`#box-${number}`).text())) {
        $(`#box-${number}`).removeClass('hidden-word')
        $(`#box-${number}`).addClass('correct-letter')
      }
    })

    let letterNumbers = [];
    for(let i = 0; i < 21; i++) {
      letterNumbers.push(i)
    }

    letterNumbers.forEach(num => {
      if(lettersArray.includes($(`#c${num}`).text())) {
        $(`#c${num}`).removeClass('unavailable-bank-letter').addClass('disabled-bank-letter').prop('disabled', true);
      }
    })
    
    $('.letter-button').removeClass('unavailable-bank-letter')
  },

  clickCounter(bonuswheel) {
    $('.letter-button').on('click', bonuswheel.onlyThreeClicks)
  },

  notEnoughFunds() {
    window.alert('you dont have enough money');
  }
}

export default domUpdates;