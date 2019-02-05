import Gameboard from './GameBoard';
import Round from './Round';

export default {
  showQuestion: function(game, tileId){
    console.log('in show question');
    console.log('game', game);

    let $questionText = $('.question-body');
    let $answerBody = $('.popup-input');

    $questionText.text(game.roundOne.clues[tileId].question);
    // answerBody.val

    

    // Round.clues[tileId];

    // {'.body'}.append{`<div>

    // </div>`}
  }
}