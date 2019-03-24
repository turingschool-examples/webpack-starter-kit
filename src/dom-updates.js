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
    let currPlayer = game.currentRound.currentPlayer;
    $(`.player-${currPlayer.playerNum}__current-points`).text(`$ ${currPlayer.roundCaps}`);
    $(`.player-${currPlayer.playerNum}__totals-points`).text(`$ ${currPlayer.totalCaps}`);
  },
  showCurrentPlayer(game){
    let currPlayer = game.currentRound.currentPlayer;
    $(`.player-${currPlayer.playerNum}__name`).toggleClass('big-red-border');
  },
  updateRoundHintCategory(game) {
    console.log(game.currentRound.roundPuzzle);
    //category
    $('.hint__title').text(`Category: ${game.currentRound.roundPuzzle.cat} | `);
    //hint
    $('.hint__value').text(`Hint: ${game.currentRound.roundPuzzle.description}`);
  },
  appendPuzzle(game){
    let valueBoard = $('.board__tile-value--container');
    const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // console.log(game.currentRound.answer) puzzle array
    game.currentRound.answer.map((letter, index)=>{
      console.log(game.currentRound.answer)
      // todo: remove index if it's not used
      if(alphabetArr.includes(letter.toUpperCase())){
        valueBoard.append(`<p class="ans-letter letter-${letter.toUpperCase()}">_</p>`);
      }
      else {
        valueBoard.append(`<p class="ans-letter ${letter}">${letter}</p>`);
      }
    })
  },
  createPuzzleClassArr(letter){
    $(`.letter-${letter.toUpperCase()}`).text(letter.toUpperCase());
		// console.log("TCL: createPuzzleClassArr -> targetClass.text()", targetClass.text())
  },
}
