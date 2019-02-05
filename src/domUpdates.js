const domUpdates = {
 
  removeStartPage() {
    $('.hidden').removeClass('hidden');
    $('.start-page').remove()
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
    let letters = roundPuzzle.correct_answer.toUpperCase().split('')

    letters.forEach((letter, i) => {
      $(`#box-${i + 13}`).text(letter)
    })

    this.hideRoundPuzzle(letters);
  },

  hideRoundPuzzle(letters) {
    console.log('im a hidden puzzle')

    letters.forEach((letter, i) => {
      if(letter != ' ' && letter != '-') {
        $(`#box-${i + 13}`).addClass('hidden-word')
      }
    })
  },

  displayLetters(consonants, vowels) {
    // $('#consonants-bank').text(consonants);
    consonants.forEach((cons,i) => {
      $(`#c${i}`).text(cons)
      // console.log(cons)
    })

    vowels.forEach((vowel,i) => {
      $(`#v${i}`).text(vowel)
      // console.log(vowel)
    })
  },

  displayTurnValue(value) {
    // let turnValue = wheel.turnValue
    $('#spin-value').text(`You've landed on: ${value}!`)
  },

  updateRoundScore(value, num) {
    $(`#player-${num}-round-score`).text(value)

  },

  clearRoundScore(wheelOfFortune) {
    console.log(wheelOfFortune)
    $(`#player-${wheelOfFortune.activePlayer.playerNumber}-round-score`).text(0)
  },

  disableButton(clickedButton) {
    clickedButton.disabled = true;
    $(clickedButton).addClass('disabled-bank-letter')
    console.log(clickedButton)
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
  }
}

export default domUpdates;