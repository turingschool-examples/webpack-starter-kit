// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// // An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';
import data from './Game-Data.js';
import Game from './Game.js';

import domUpdates from './domUpdates.js';

$(".start").click(domUpdates.getPlayerNames());

