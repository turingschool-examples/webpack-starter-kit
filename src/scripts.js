// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { apiCall, retrieveUser } from './apiCalls';
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');
const apiData = apiCall()
const customer = retrieveUser(5)
console.log(customer.getInformation())
console.log(apiData.getBookings(),apiData.getRooms())