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
const roomTypeSelector = document.getElementById('room-type')
const bookingButton = document.getElementById('booking-button')
const availableBookingSection = document.querySelector('.available-bookings')

//Variables
let bookings
let rooms
let customers
let singleCustomer
let currentCustomer
let customersRooms = []
let unavailable = []
let available = []
let roomFilter 

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

function checkInputs(event) {
    if(bookingYear.value === "Year") {
        availableBookingSection.innerHTML = '<p>Please select a year!</p>'
    } else if(bookingMonth.value === "Month") {
        availableBookingSection.innerHTML = '<p>Please select a month!</p>'
    } else if(bookingDay.value === "Day") {
        availableBookingSection.innerHTML = '<p>Please select a day!</p>'
    } else{filterNewBooking()}
    event.preventDefault()

}

function filterNewBooking() {
    unavailable = []
    available = []
    let unavailableRooms = bookings.filter(booking => booking.date === `${bookingYear.value}/${bookingMonth.value}/${bookingDay.value}`)
    unavailableRooms.forEach(room => 
        unavailable.push(room.roomNumber)
    )
    rooms.forEach(room => {
        if(unavailable.includes(room.number)) {
            return
        } else {available.push(room)}
    })
    showAvailableBookings()
}

function showAvailableBookings() {
    availableBookingSection.innerHTML = ''
    available.forEach(booking => {
        availableBookingSection.insertAdjacentHTML('beforeend', `<p id="${booking.number}">Bed Size: ${booking.bedSize}, Room Type: ${booking.roomType}, Bidet: ${booking.bidet}, Cost(per night): ${booking.costPerNight}, Number of Beds: ${booking.numBeds}, Room Number: ${booking.number}</p>`)
    })
    checkForUnavailable()
}

function filterByRoomType() {
    if(roomTypeSelector.value != "Room Type") {filterResults()} else {return}
}

function filterResults() {
    availableBookingSection.innerHTML = ''
    roomFilter = available.filter(room => room.roomType === roomTypeSelector.value)
    roomFilter.forEach(booking => {
        availableBookingSection.insertAdjacentHTML('beforeend', `<p id="${booking.number}">Bed Size: ${booking.bedSize}, Room Type: ${booking.roomType}, Bidet: ${booking.bidet}, Cost(per night): ${booking.costPerNight}, Number of Beds: ${booking.numBeds}, Room Number: ${booking.number}</p>`)
    })
    checkForUnavailable()
}

function checkForUnavailable() {
    if(unavailable === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]) {
        availableBookingSection.innerHTML = `<p> We are so sorry but there seems to be no available bookings for that day!</p>`
    }
}

function createNewBooking(event) {
    const id = event.target.id
    const bookedRoom = rooms.filter(room => parseInt(id) === room.number)
    console.log(bookedRoom[0])
    post(bookedRoom[0])
}

function post(data) {
    fetch('http://localhost:3001/api/v1/booking', {method: 'POST', body : data})
    .then(results => results.json)
    .then(console.log)
}

//Event Listeners
addEventListener('load', fetchApiCalls())
bookingButton.addEventListener('click', checkInputs)
bookingButton.addEventListener('click', filterByRoomType)
availableBookingSection.addEventListener('click', createNewBooking)
