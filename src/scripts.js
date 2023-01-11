// import live here
import './css/styles.css';

import './images/turing-logo.png'

// query selectors go here

// global variables used for data model here
let travelersRepo 
let currentTraveler

//functions here
function apiCalls () {
    getApiData()
    loadHandler()
}

function getApiData() {
    let getAllTravelers = fetch('http://localhost:3001/api/v1/travelers	')
}


function loadHandler() {
    console.log("this loaded")
}

//event listeners here
window.addEventListener("load", apiCalls())