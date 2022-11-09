//Imports
import './css/styles.css'
import './images/turing-logo.png'
import apiCalls from './fetchApi'



//Query Selectors

//Variables
let bookings
let rooms
let customers
let singleCustomer

//Functions
const fetchApiCalls = () => {
    apiCalls.fetchData().then(data => {
      bookings = data[0]
      rooms = data[1]
      customers = data[2]
      singleCustomer = data[3]

      loadHandler()
    })
  }

  function loadHandler() {
    console.log(bookings, rooms, customers, singleCustomer)
  }

//Event Listeners
addEventListener('load', fetchApiCalls())
