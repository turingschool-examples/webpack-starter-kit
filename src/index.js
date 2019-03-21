// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
// jQuery selectors


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import data from './data_wheel-of-fortune'
console.log(Object.keys(data))
console.log(Object.keys(data.puzzles))
console.log(data.puzzles.one_word_answers.puzzle_bank)
/*

data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !


*/
