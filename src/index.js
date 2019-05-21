// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


import User from './User';
import Game from './Game';


const user2 = new User("Andreea")
const user1 = new User("Emily")

$('.submit-guess').on('click', function(){
  user1.updateScore(100);
  console.log(user)
});

