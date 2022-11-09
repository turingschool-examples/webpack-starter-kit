//Imports
import './css/styles.css'
import './images/turing-logo.png'
import apiCalls from './fetchApi'
import Customer from './classes/customer'


//Query Selectors
const bookingsList = document.querySelector(".bookings-list")


//Variables
let bookings
let rooms
let customers
let singleCustomer
let currentCustomer
let customersRooms = []

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
    currentCustomer = new Customer(singleCustomer, bookings)
    totalBookingsCost()
    displayUserData()
}

function totalBookingsCost() {
    currentCustomer.findAllBookings()
    currentCustomer.customersBookings.forEach(booking => {
        customersRooms.push(rooms.filter(room => room.number === booking.roomNumber)[0])
    })
    return customersRooms.reduce((acc, cur) => {
        return cur.costPerNight + acc
    }, 0)
}

function displayUserData() {
    currentCustomer.customersBookings.forEach(booking => {
        bookingsList.insertAdjacentHTML('beforeend' ,`<p>${booking.date} Room Number:${booking.roomNumber}</p>`)
    })
}

//Event Listeners
addEventListener('load', fetchApiCalls())
