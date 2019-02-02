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
    let splitWords = roundPuzzle.correct_answer.split(' ');

    splitWords.forEach((word, i) => {
      console.log(splitWords.length);
      if(splitWords.length)
      let lettersArray = word.split('')
      console.log(lettersArray);
    })
      // if(splitWords[1] && splitWords[0] + splitWords[1] > 12) {
      //   $(`#box-${i + 13}`).text(splitWords[1].split(''))
      // } else {
      //   $(`#box-${i + 1}`).text(word.split(''));
      // }
  }
}

export default domUpdates;