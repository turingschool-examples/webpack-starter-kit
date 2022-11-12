//Imports
import './css/styles.css'
import './images/turing-logo.png'
import apiCalls from './fetchApi'
import Customer from './classes/customer'


//Query Selectors
const bookingsList = document.querySelector('.bookings-list')
const totalCostOfBookings = document.querySelector('.total-booking-cost')
const bookingYear = document.getElementById('year')
const bookingMonth = document.getElementById('month')
const bookingDay = document.getElementById('day')
const bookingButton = document.getElementById('booking-button')

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
    currentCustomer.sortBookings()
    currentCustomer.customersBookings.forEach(booking => {
        customersRooms.push(rooms.filter(room => room.number === booking.roomNumber)[0])
    })
    return customersRooms.reduce((acc, cur) => {
        return cur.costPerNight + acc
    }, 0)
}

function displayUserData() {
    currentCustomer.customersBookings.forEach(booking => {
        bookingsList.insertAdjacentHTML('beforeend', `<p>${booking.date} Room Number:${booking.roomNumber}</p>`)
    })
    totalCostOfBookings.innerHTML = `<p>You've spent: $${totalBookingsCost()}`
}

function filterNewBooking(event) {
    let unavailable = []
    let available = []
    let unavailableRooms = bookings.filter(booking => booking.date === `${bookingYear.value}/${bookingMonth.value}/${bookingDay.value}`)
    unavailableRooms.forEach(room => 
        unavailable.push(room.roomNumber)
    )
    rooms.forEach(room => {
        if(unavailable.includes(room.number)) {
            return
        } else {available.push(room)}
    })
    console.log(unavailableRooms, unavailable, available)
    event.preventDefault()
}

//Event Listeners
addEventListener('load', fetchApiCalls())
bookingButton.addEventListener('click', filterNewBooking)
