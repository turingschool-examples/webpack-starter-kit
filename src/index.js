// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file
import domUpdates from './domUpdates.js';

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Game from './Game';

console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();

$('.start-button').on('click', function() {
  domUpdates.displayName();
  $('.start-button').hide('slow');
  // $('.quit-game').prop('disabled', false);
});