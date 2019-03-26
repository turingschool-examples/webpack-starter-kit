import $ from 'jquery';
import data from './data-set.js';
import Player from './Player.js';
import DailyDouble from './DailyDouble.js';
import Round from './Round.js';
import Game from './Game.js';


export default {
  updateNames(names) {
    $('#player-one-name').text(names[0].name).show();
    $('#player-two-name').text(names[1].name).show();
    $('#player-three-name').text(names[2].name).show();
    $('#player-one-input').hide(500);
    $('#player-two-input').hide(500);
    $('#player-three-input').hide(500);
  },

  notifyPlayerOneTurn(names, game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:red;');
      $('#player-three-name').removeAttr('style', 'color:red;');
    } 
  },

  newCategoryValues() {
    let roundTwoValues = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
    let result = roundTwoValues.map(number => {
        return number * 200;
      })
    $('h3').each(function(i) {
      $(this).text(result[i]);
    })
  },

  notifyNextTurn(game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:red;');
      $('#player-three-name').removeAttr('style', 'color:red;');
    } 
    if (game.playerTurn === 1) {
      $('#player-two-name').attr('style', 'color:red;');
      $('#player-one-name').removeAttr('style', 'color:red;');
    }
    if (game.playerTurn === 2) {
      $('#player-three-name').attr('style', 'color:red;');
      $('#player-one-name').removeAttr('style', 'color:red;');
      $('#player-two-name').removeAttr('style', 'color:red;');
    }
  },

  displayCategories(categories) {
    const categoryTitles = [ 'US History', 'Life Sciences', 
      'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 
      'Biographies', 'American Cities', 'Food', 'Cable TV' ];
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(`${categoryTitles[category - 1]}`);
      $(`.col.${index}`).attr('id', category);
    });
  },

  showClue(game, clue, event) {
    game.round.cluesRemaining--;
    console.log(game.round.cluesRemaining);
    console.log(game.round.dailyDoubleClue);
    if (game.round.cluesRemaining === game.round.dailyDoubleClue) {
      this.dailyDouble(game, clue);
    } else {
      $('.question-prompt').show();
      $('.result-prompt').hide();
      $('.question').text(clue.question);
      $(event.target).text('');
    }
  },
    
  answerQuestion(game) {
    let currentPlayer = game.players[game.playerTurn];
    if (game.round.cluesRemaining === 0) {
      game.repopulateCategoryValues();
      game.createRound();
    }
    let result = data.clues.reduce((acc, currentClue) => {
      if ($(".question").text() === currentClue.question) {
        acc += currentClue.answer;
      }
      return acc;
    }, '');
    if (result.toLowerCase() === $('#question-input').val().toLowerCase()) {
      $('.question-prompt').hide();
      $('.result-prompt').show();
      $('.result').text('Correct Answer');
      currentPlayer.increaseScore(result);
      $(`#player-${game.playerTurn}-points`).text(currentPlayer.score);
    } else {
      $('.question-prompt').hide();
      $('.result-prompt').show();
      $('.result').text('Incorrect Answer');
      currentPlayer.decreaseScore(result);
      $(`#player-${game.playerTurn}-points`).text(currentPlayer.score);
      game.changePlayerTurn();
    }
  },

  dailyDouble(game, clue) {
    $('.style-daily-double').show();
    let wagerAmount;
    let dailyDouble;
    $('#daily-double').keyup(function () {
      wagerAmount = $('#daily-double').val();
    });
    $('.daily-double-btn').click(function (e) {
      e.preventDefault();
      dailyDouble = new DailyDouble(clue.question, clue.answer, clue.pointValue);
      dailyDouble.updatePointValue(wagerAmount);
    });
    // $('.question-prompt').show();
    // $('.result-prompt').hide();
    // $('.question').text(clue.question); 
  }

  
}