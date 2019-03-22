// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

import GameEngine from './game-engine'
// jQuery selectors
let game = null;
let players = [];
$('.start__start--btn').click(() =>{
  players.push(
    $('.playerinfo__player-1').val(),
    $('.playerinfo__player-2').val(),
    $('.playerinfo__player-3').val()
  )
  console.log(players)
  
  game = new GameEngine(players);
  console.log(game.players);
});





// An example of how you tell webpack to apply a CSS file
// import './css/fonts/overseer.css';
// import './fonts/Lato-Thin.ttf';

import './css/base.css';
import './css/normalize.css';
// import './css/Lato-Thin.ttf'



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/terminal2.jpg';
import './images/mad max.jpg';
import './images/mysteriousStranger.png';
import './images/radroach.png';
import './images/raider.png';
import './images/smallvaultec.png';
import './images/smartypants.png';
import './images/thumbs.png';
import './images/vaultDoor.png';
import './images/vaultTec.jpg';
import './images/yesMan.jpg';
import './images/bottleCaps.png';
import './images/deathclaw.jpg';
import './images/incorrect.png';


// import './css/Overseer.otf'



