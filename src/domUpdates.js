import Game from './Game.js'

export default{
  grabNames: function () {
    let players = ([$('#player1').val(), $('#player2').val(), $('#player3').val()]);
    return players;
  },
  loadGameBoard: function (arr) {
    $('.entry-page').attr('class','game-board-area');
    $('.intro-page').attr('class', 'entry-page');
    arr.forEach((player,ind) => {
        $('#player' + ([ind + 1]) + '-name-text').text(player.name);
    })
  },

  GameBoardListener: function(event) {
    console.log('testing3');
      // let currentQuestion; 
      // let categoryIndex = event.target.classList[1];
      switch (event.target.classList.contains[0]) {
      case '100-val':
      console.log('testing4')
        // currentQuestion = round.roundClues[categoryIndex][0];
        event.target.classList.add('question-used');
        break;
      case '200-val':
        // currentQuestion = round.roundClues[categoryIndex][1];
        event.target.classList.add('question-used');
        break;
      case '300-val':
        // currentQuestion = round.roundClues[categoryIndex][2];
        event.target.classList.add('question-used');
        break;
      case '400-val':
        // currentQuestion = round.roundClues[categoryIndex][3];
        event.target.classList.add('question-used');
        break;
    }
  }
}


