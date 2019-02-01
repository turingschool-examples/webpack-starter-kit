const domUpdates = {
 
  removeStartPage() {
    $('.hidden').removeClass('hidden');
    $('.start-page').remove()
  },

  displayPlayers(p1, p2, p3) {
      $('.player-names-0').text(p1.name);
      $('.player-names-1').text(p2.name);
      $('.player-names-2').text(p3.name);
  },

  displayCategory(roundPuzzle) {
    $('.category-window').text(roundPuzzle.category)
  },

  showHiddenPuzzle() {
    //we're gonna grab the puzzle.correct_answer
  }
}

export default domUpdates;