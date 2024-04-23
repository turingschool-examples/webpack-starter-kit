// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { apiCall, fetchUser } from './apiCalls';
import './css/styles.scss';
import './domUpdates'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');
export const apiData = apiCall()
export const dataModel ={
    user: {}
}