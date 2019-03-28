    checkAnswer(guess, player) {
        let answers = this.questionSet.answers;
        $('.answerInput').val('');

        answers.forEach((answer) => {
            if(guess.toLowerCase() === answer.answer.toLowerCase()) {
                player.addScore(answer.respondents);
            }
        })
      }
    }

    game => round, players, currentPlayer

    game.round.checkAnswer(guess, this.currentPlayer)


    // f(x) => x^2
    // f(x) => x^2 + 2y + 3

    function math(x) {
      return Math.pow(x, 2);
    }