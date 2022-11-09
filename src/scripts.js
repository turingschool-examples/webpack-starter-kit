//Imports
import './css/styles.css'
import './images/turing-logo.png'
import apiCalls from './fetchApi'
import Customer from './classes/customer'


//Query Selectors

//Variables
let bookings
let rooms
let customers
let singleCustomer
let customer12

//Functions
const fetchApiCalls = () => {
    apiCalls.fetchData().then(data => {
      bookings = data[0].bookings
      rooms = data[1].rooms
      customers = data[2].customers
      singleCustomer = data[3]

      loadHandler()
    })
  }

  function loadHandler() {
    console.log(bookings, rooms, customers, singleCustomer)
    customer12 = new Customer(singleCustomer, bookings)
    console.log(customer12)
  }

//Event Listeners
addEventListener('load', fetchApiCalls())
