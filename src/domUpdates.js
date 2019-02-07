import $ from 'jquery';


export default {
  
  showQuestion(game, tileId) {
    let $questionText = $('.question-body');
    $questionText.text(game.roundOne.clues[tileId].question);
    if (game.activeRound === game.roundOne) {
      $questionText.text(game.roundOne.clues[tileId].question);
    } else if (game.activeRound === game.roundTwo) {
      $questionText.text(game.roundTwo.clues[tileId].question);
    } 
  },
  
  toggleStart() {
    let $p1Name = $("#p1-name-change-js")
    $p1Name.text($('#p1-name-js').val())
    let $p2Name = $("#p2-name-change-js")
    $p2Name.text($('#p2-name-js').val())
    let $p3Name = $("#p3-name-change-js")
    $p3Name.text($('#p3-name-js').val())
    $('.start-up').hide();
    $('.question-container').hide();
    $('.overlay').hide();
  },
  
  hidePopup() {
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
  },
  
  showPopup() {
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
    $('.start-container').hide();
    $('.answer').hide();
    $('.question-result').hide();
  },
  
  showAnswer(game, tileId) {
    let $answer = $('.answer');
    $answer.show();
    $('.question-result').show();
    if (game.activeRound === game.roundOne) {
      let ans = game.roundOne.clues[tileId]
      game.activePlayer.validAns(ans, game);
      $answer.text(ans.answer);
    } else if (game.activeRound === game.roundTwo) {
      let ans = game.roundTwo.clues[tileId]
      game.activePlayer.validAns(ans, game);
      $answer.text(ans.answer);
    } 
  },
  
  changeCatTitles(game) {
    let names;
    if (game.activeRound === game.roundOne) {
      names = game.roundOne.catNames;
      $('.cat0').text(names[0]);
      $('.cat1').text(names[1]);
      $('.cat2').text(names[2]);
      $('.cat3').text(names[3]);
    } else if ( game.activeRound === game.roundTwo) {
      names = game.roundTwo.catNames;
      $('.cat0').text(names[0]);
      $('.cat1').text(names[1]);
      $('.cat2').text(names[2]);
      $('.cat3').text(names[3]);
      $('#round-js').text('2');
      $('.col').show()
    } 
    
  },
  
  correctAns() {
    $('.question-result').text('CORRECT!');
  },
  
  wrongAns() {
    $('.question-result').text('NICE TRY!');
  },
  updateScore(game) {
    game.players.forEach((player, ind) => {
      $(`#player-${ind}-hp`).text(player.score)
    })
    $('#clue-num-js').text(game.cluesRemaining);
  }
}