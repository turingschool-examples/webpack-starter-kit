import $ from 'jquery'

export default {


    

  createGameBoard(array) {
        
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
            <table class="letters-selected">
            <tr>
            <td class="single-letter">${array[0]}</td>
            <td class="single-letter">${array[1]}</td>
            <td class="single-letter">${array[2]}</td>
            <td class="single-letter">${array[3]}</td>
            <td class="single-letter">${array[4]}</td>
            <td class="single-letter">${array[5]}</td>
            <td class="single-letter">${array[6]}</td>
            <td class="single-letter">${array[7]}</td>
            <td class="single-letter">${array[8]}</td>
            <td class="single-letter">${array[9]}</td>
                <td class="single-letter">${array[10]}</td>
                <td class="single-letter">${array[11]}</td>
                <td class="single-letter">${array[12]}</td>
                <td class="single-letter">${array[13]}</td>
                <td class="single-letter">${array[14]}</td>
                <td class="single-letter">${array[15]}</td>
                <td class="single-letter">${array[16]}</td>
                <td class="single-letter">${array[17]}</td>
                <td class="single-letter">${array[18]}</td>
                <td class="single-letter">${array[19]}</td>
                <td class="single-letter">${array[20]}</td>
                <td class="single-letter">${array[21]}</td>
                <td class="single-letter">${array[22]}</td>
                <td class="single-letter">${array[23]}</td>
                <td class="single-letter">${array[24]}</td>
                <td class="single-letter">${array[25]}</td>
            </tr>
        </table>
    </section>
    <section id="puzzle-area" class="puzzle-area">
        <div class="puzzle">
            <table class="puzzle-row">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </section>
    `)
  },

  createPlayerBox(player) {
    $('.puzzle-area').append(
      `<section id="player-actions" class="player-actions">
      <div>
          <button>Spin Wheel</button>
      </div>
      <div>
          <button>Buy Vowel</button>
      </div>
      <div>
          <input type="text" id="guess-submission" class="guess-submission" placeholder="Submit a guess!"><button>Submit Guess</button>
      </div>
        </section>
      <section id="player-score-area" class="player-score-area">
        <div id="player-score" class="player-score">
            <h2>${player[0].name}</h2>
            <p>${player[0].score}</p>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[1].name}</h2>
            <p>${player[0].score}</p>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[2].name}</h2>
            <p>${player[0].score}</p>
        </div>
    </section>`
    )
  }
  
}