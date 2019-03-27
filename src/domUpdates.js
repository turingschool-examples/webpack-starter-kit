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

  displayRound(currentRound) {
    $('#round').text(currentRound);
  },

  notifyPlayerOneTurn(game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:#02F4E5;');
      $('#player-three-name').removeAttr('style', 'color:#02F4E5;');
    } 
  },

  showClue(game, clue, event) {
    game.round.cluesRemaining--;
    if (game.round.cluesRemaining === game.round.dailyDoubleClue) {
      this.dailyDouble(game, clue);
    } else {
      $('.question-prompt').show();
      $('.result-prompt').hide();
      $('.question').text(clue.question);
      $(event.target).text('');
      $('.game-board').hide();
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
  },

  answerQuestion(game) {

    let currentPlayer = game.players[game.playerTurn];
    if (game.round.cluesRemaining === 0) {
      game.roundCounter++;
      this.displayRound(game.roundCounter);
      this.newCategoryValues();
      game.createRound();
    }
    let answerMatch = data.clues.reduce((acc, currentClue) => {
      if ($(".question").text() === currentClue.question) {
        acc += currentClue.answer;
      }
      return acc;
    }, '');
    if (answerMatch.toLowerCase() === $('#question-input').val().toLowerCase()) {
      this.rightAnswer(currentPlayer, answerMatch, game);
    } else {
      this.wrongAnswer(currentPlayer, answerMatch, game);
    }
    $('#question-input').val('');
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

  rightAnswer(currentPlayer, answerMatch, game) {
     $('.game-board').show();
     $('.question-prompt').hide();
     $('.result-prompt').show(500);
     $('.result').text('Correct Answer!');
     currentPlayer.increaseScore(answerMatch, game);
     $(`#player-${game.playerTurn}-points`).text(currentPlayer.score);
     $('.result-prompt').hide(3000);
  },

  wrongAnswer(currentPlayer, answerMatch, game) {
    $('.game-board').show();
    $('.question-prompt').hide();
    $('.result-prompt').show(500);
    $('.result').text('Incorrect Answer!');
    currentPlayer.decreaseScore(answerMatch, game);
    $(`#player-${game.playerTurn}-points`).text(currentPlayer.score);
    game.changePlayerTurn();
    $('.result-prompt').hide(3000);
  },

  notifyNextTurn(game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:#02F4E5;');
      $('#player-three-name').removeAttr('style', 'color:#02F4E5;');
    } 
    if (game.playerTurn === 1) {
      $('#player-two-name').attr('style', 'color:#02F4E5;');
      $('#player-one-name').removeAttr('style', 'color:#02F4E5;');
    }
    if (game.playerTurn === 2) {
      $('#player-three-name').attr('style', 'color:#02F4E5;');
      $('#player-one-name').removeAttr('style', 'color:#02F4E5;');
      $('#player-two-name').removeAttr('style', 'color:#02F4E5;');
    }
  },

  newCluePoints(game, id, innerText, event) {
    let round2Clues = data.clues.map(clue => {
     return {
             question: clue.question,
             pointValue: clue.pointValue * 2,
             answer: clue.answer,
             categoryId: clue.categoryId
           }
    });
    game.round.displayNextRoundClues(game, id, innerText,round2Clues, event);
  },

  showNewClue(game, newClue, event) {
    console.log(newClue)
    game.round.cluesRemaining--;
      $('.question-prompt').show();
      $('.result-prompt').hide();
      $('.question').text(newClue.question);
      $(event.target).text('');
      $('.game-board').hide();
  },

  updateCategory () {
    const categoryTitles = [ 'US History', 'Life Sciences', 
      'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 
      'Biographies', 'American Cities', 'Food', 'Cable TV' ];
    const {id } = event.target
    $('#category').text(`${categoryTitles[event.target.id -1]}`)
  },

}