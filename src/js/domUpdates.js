import $ from 'jquery';

export default {

  updateQInfo(question) {
    $('.category').text(question.category);
    $('.description').text(question.description);

    question.answer.split('').forEach(letter => {
      letter = letter.toUpperCase();
      if (letter === ' ') {
        $('.word-box').append(`<div class="space-box"></div>`);
      } else if (letter === '&' || letter === '-' || letter === "'") {
        $('.word-box').append(`<div class="special-char-box">${letter}</div>`)
      } else {
        $('.word-box').append(`<div class="letter-box"><div class="letter hidden">${letter}</div></div>`);
      }
    })
  },

  loadPossiblePrizes(prizes) {
    $('.possible-prizes').empty();
    $('.possible-prizes').append('<p>Prizes:</p>');
    prizes.forEach(prize => {
      $('.possible-prizes').append(`<span>${prize}</span>`);
    })
  },

  revealPrize(prize) {
    $('.prize').text('');
    $('.wheel-img').addClass('spin');
    $('.prize').parent().removeClass('prize-animation');
    setTimeout(() => {
      $('.prize').parent().addClass('prize-animation');
      $('.prize').text(`You Got: ${prize}`);
    }, 100)
    this.hideInputs();
    setTimeout(() => {
      this.showInput();
      this.showVowels();
      this.showSolveInput();
      $('.wheel-img').removeClass('spin');
    }, 500);
  },

  showInput() {
    $('.check-btn, .ltr-input').show();
    $('.btn-solve, .buy, .btn-spin').attr('disabled', true)
  },

  hideInputs: () => {
    $('.vowels-to-buy').hide();
    $('.input-solve, .final-solution-btn').hide();
    $('.check-btn, .ltr-input').hide();
  },

  showSolveInput: () => {
    $('.btn-solve').on('click', function() {
      $('.input-solve, .final-solution-btn').show();
      $('.vowels-to-buy').hide();
      $('.check-btn, .ltr-input').hide();
    });
  },

  showVowels: () => {
    $('.buy').on('click', function() {
      $('.vowels-to-buy').toggle().addClass('slide-in');
      $('.buy, .btn-spin, .btn-solve').attr('disabled', true)
      $('.input-solve, .final-solution-btn').hide();
      $('.check-btn, .ltr-input').hide();
    });
  },

  getNames() {
    let $p1Name = $('#p1Name').val();
    let $p2Name = $('#p2Name').val();
    let $p3Name = $('#p3Name').val();
    return [$p1Name, $p2Name, $p3Name];
  },

  appendNames() {
    let $p1Name = $('#p1Name-board');
    $p1Name.text($('#p1Name').val());
    let $p2Name = $('#p2Name-board');
    $p2Name.text($('#p2Name').val());
    let $p3Name = $('#p3Name-board');
    $p3Name.text($('#p3Name').val());
    $('.splash').hide();
    $('.game-page').show();
    $('.player-section').css('visibility', 'visible');
  },

  getAnswer() {
    return $('.input-solve').val();
  },

  getConsonant() {
    return $('.ltr-input').val().toUpperCase();
  },

  getBoard() {
    return $('.hidden')
  },

  clearClass(e) {
    $(e).removeClass('hidden')
  },

  updateScore(player, score) {
    switch (player) {
      case 0:
      $('.p1-score').text(score)
      break;
      case 1:
      $('.p2-score').text(score)
      break;
      default:
      $('.p3-score').text(score)
    }
  },

  updateBank(player, score) {
    switch (player) {
      case 0:
      $('.p1-bank').text(score)
      break;
      case 1:
      $('.p2-bank').text(score)
      break;
      default:
      $('.p3-bank').text(score)
    }
  },

  appendLetters(letters) {
    $('.letters-used').empty();
    letters.forEach(ltr => {
      $('.letters-used').append(ltr)
    })
  },

  correctAns() {
    $('.feedback').text('Finally!')
  },

  wrongAns() {
    $('.feedback').text('Morty! No!')
  }
}