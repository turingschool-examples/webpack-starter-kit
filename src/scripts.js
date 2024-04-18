// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import {getAllData, getAllUsers, getAllRooms, getAllBookings} from './api-calls.js'


// console.log('This is the JavaScript entry file - your code begins here.');
// export let allData;
import { getAllData } from './api-calls.js';
import {load} from './dom-updates.js';
load()
// getAllData()
// .then(apiData => {
//     allData = apiData;
//      console.log('all', allData)
//     return allData
   
//     const user = getRandomUser(allData)  
// })
// console.log('yessir', allData)
