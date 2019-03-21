import $ from 'jquery'

export default {


  createGameBoard(player) {
    $('main').append(
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
    <section id="player-score-area" class="player-score-area">
    <div id="player-score" class="player-score">
    <h2>${players[0].name}</h2>
    <p>${players[0].score}</p>
    </div>
    <div id="player-score" class="player-score">
    <h2>${players[1].name}</h2>
    <p>${players[0].score}0</p>
    </div>
    <div id="player-score" class="player-score">
    <h2>${players[2].name}</h2>
    <p>${players[0].score}</p>
    </div>
    </section>
    `)
  }
    
  // makeWheel(array) {

  //   $('body').prepend(`<section id="theWheel">
  //   <div>
  //     <h3>${game.wheel[5]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[4]}</h3>
  //   </div>
  //   <div>
  //       <h3 class="wheelSelection">${game.wheel[3]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[2]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[1]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[0]}</h3>
  //   </div>
  //   <button class="wheelSpin">Spin Wheel</button>
  // </section>`)
  // }
}