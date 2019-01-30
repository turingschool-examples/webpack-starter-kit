// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css'; 
import Game from'./Game.js';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

window.onload = config

function config() {
const wheelOfFortune = new Game(1, 'playerone');

wheelOfFortune.startGame();
}

console.log('This is the JavaScript entry file - your code begins here.');



export default index.js;