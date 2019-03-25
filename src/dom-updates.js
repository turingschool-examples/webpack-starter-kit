import $ from 'jquery';

export default {
  hidePopup(game) {
    $('.popup--active').addClass('hidden');
    this.appendNames(game)
  },
  appendNames(game) {
    game.players.map((player, index)=>{
      $(`.player-${index + 1}__name`).text(player.name)
    })
  },
  updatePlayerScore(game) {
    // !! update all player scores every time this is invoked, not just the current player e.g. use a map or some sort of iteration
    // let currPlayer = game.currentRound.currentPlayer;
    // $(`.player-${currPlayer.playerNum}__current-points`).text(`${currPlayer.roundCaps}`);
    // $(`.player-${currPlayer.playerNum}__totals-points`).text(`${currPlayer.totalCaps}`);
    game.players.map((player, index) => {
    $(`.player-${index + 1}__current-points`).text(`${player.roundCaps}`);
    $(`.player-${index + 1}__total-points`).text(`${player.totalCaps}`);
    })
  },
  showCurrentPlayer(game){
    let currPlayer = game.currentRound.currentPlayer;
    $(`.player-${currPlayer.playerNum}__name`).toggleClass('big-red-border');
  },
  updateLettersUsed(game){
    let lettersRemaining = $('.letters__remaining');
    lettersRemaining.text(game.currentRound.allRoundGuesses);
  },
  updateRoundNumber(game) {
    $('#rnd-num').text(game.currentRound.roundNumber)
    console.log("round-num: ", game.currentRound.roundNumber)
  },
  updateRoundHintCategory(game) {
    // console.log(game.currentRound.roundPuzzle);
    //category
    $('.hint__title').text(`Category: ${game.currentRound.roundPuzzle.cat} | `);
    //hint
    $('.hint__value').text(`Hint: ${game.currentRound.roundPuzzle.description}`);
    this.updateRoundNumber(game);
  },
  appendPuzzle(game){
    // ! remove children of board--container
    // !!!
    let valueBoard = $('.board__tile-value--container');
    valueBoard.html('');
    $('.letters__remaining').html('_');
    const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // console.log(game.currentRound.answer) puzzle array
    game.currentRound.answer.map((letter, index)=>{
      // console.log(game.currentRound.answer)
      // todo: remove index if it's not used
      if(alphabetArr.includes(letter.toUpperCase())){
        valueBoard.append(`<p class="ans-letter letter-${letter.toUpperCase()}">_</p>`);
      }
      else {
        valueBoard.append(`<p class="ans-letter">${letter}</p>`);
      }
    })
  },
  createPuzzleClassArr(letter){
    $(`.letter-${letter.toUpperCase()}`).text(letter.toUpperCase());
		// console.log("TCL: createPuzzleClassArr -> targetClass.text()", targetClass.text())
  },
}
