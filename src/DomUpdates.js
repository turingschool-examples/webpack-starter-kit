import $ from 'jquery'

export default {


  createBoard(player) {
    
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
        <table class="letters-selected">
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>H</td>
                <td>I</td>
                <td>J</td>
                <td>K</td>
                <td>L</td>
                <td>M</td>
                <td>N</td>
                <td>O</td>
                <td>P</td>
                <td>Q</td>
                <td>R</td>
                <td>S</td>
                <td>T</td>
                <td>U</td>
                <td>V</td>
                <td>W</td>
                <td>X</td>
                <td>Y</td>
                <td>Z</td>
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
    <section id="player-actions" class="player-actions">
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
    </section>
    `)
  }
  
}