import './css/styles.css';
import './images/turing-logo.png'
import HotelData from './classes/hotelData.js'


//Global variables

var hotelData

//Fetch my data!

const customers = fetch('http://localhost:3001/api/v1/customers')
  .then((res) => res.json())
const rooms =  fetch('http://localhost:3001/api/v1/rooms')
  .then((res) => res.json())
const bookings = fetch('http://localhost:3001/api/v1/bookings')
  .then((res) => res.json())

