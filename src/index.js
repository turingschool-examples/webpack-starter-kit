// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/backpack.svg'
import './images/dish.svg'
import './images/door.svg'
import './images/notepad.svg'
import './images/profile.svg'


console.log('This is the JavaScript entry file - your code begins here.');

import domUpdates from './domUpdates';

let userData;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(dataFile => dataFile.json())
  .then(dataFile => userData = dataFile.users);

let roomsData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomsData = dataFile.rooms);

let bookingsData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
    .then(dataFile => dataFile.json())
    .then(dataFile => bookingsData = dataFile.bookings);

let roomServicesData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomServicesData = dataFile.roomServices);

