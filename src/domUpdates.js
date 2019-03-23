import $ from 'jquery';
import Game from './Game.js';



$(window).on('load', popUp);

console.log('what up');

function popUp() {
  let startPopUp = $('.gamePopUp');
  startPopUp.innerHTML += `<section class="startGamePopUp">
     <h2>Welcome to Family Feud!</h2>
     <p>Please enter player names.</p>
      <label for="">Player 1 Name</label>
     <input class="nameOne"></input>
     <label for="">Player 2 Name</label>
     <input class="nameTwo"></input>
     <button id="startBtn">Start Game</button>
    </section>`

console.log('heyyyy')
};




// export default domUpdates;

//update scores
//update questions
//update answers


