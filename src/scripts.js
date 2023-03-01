import './css/styles.css';
import './images/turing-logo.png'
import HotelData from './classes/hotelData.js'

//Fetch my data!

const customers = fetch('http://localhost:3001/api/v1/customers')
  .then((res) => res.json())
const rooms =  fetch('http://localhost:3001/api/v1/rooms')
  .then((res) => res.json())
const bookings = fetch('http://localhost:3001/api/v1/bookings')
  .then((res) => res.json())

Promise.all([customers, rooms, bookings])
  .then((data) => {
    let allData = {
      customers: data[0].customers,
      rooms: data[1].rooms,
      bookings: data[2].bookings
    }
    return allData
  })
  .then((allData) => {
    hotelData = new HotelData(allData)
    renderData()
  })

//Global variables

var isAdmin = JSON.parse(sessionStorage.getItem('isAdmin')) || false
var loggedIn = JSON.parse(sessionStorage.getItem('loggedIn')) || false
var hotelData
var currentUser = 50
var currentMonth
var currentDay
var currentYear
var currentDate

//Event Listeners and their variables

const title = document.querySelector('#page-title')
const logInButton = document.querySelector('#log-in-button')
const badLogin = document.querySelector('#bad-login')
const logOutButton = document.querySelector('#log-out')
const login = document.querySelector('#login')
const customerNav = document.querySelector('#customer-buttons')
const adminNav = document.querySelector('#admin-buttons')
const dataPane = document.querySelector('#info-pane-text')


logInButton.addEventListener('click', logIn)
logOutButton.addEventListener('click', logOut)

//log into page

function renderData() {
    console.log(hotelData)
  if (loggedIn === true) {
    checkPrivlage()
  }
}

function logIn() {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  if (username === 'customer50' && password === 'overlook2021') {
    sessionStorage.setItem('isAdmin', false)
    sessionStorage.setItem('loggedIn', true)
    checkPrivlage()
  } else if (username === 'manager' && password === 'overlook2021') {
    sessionStorage.setItem('isAdmin', true)
    sessionStorage.setItem('loggedIn', true)
    checkPrivlage()
  } else {
    badLogin.style.display = 'block'
    setTimeout(() => {
      badLogin.style.display = 'none'
    }, 1500)
  }
}

function checkPrivlage() {
  isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'))
  if (isAdmin === true) { 
    adminView()
  } else {
    customerView()
  }
}

function logOut() {
  sessionStorage.clear()
  window.location.href = 'index.html' 
}

//2 views

function customerView() {
  customerNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  dataPane.innerText = `Hello, ${hotelData.customers[currentUser - 1].name}`
}

function adminView() {
  adminNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  title.innerText = "Overlook Admin"
  dataPane.innerText = `Daily Statistics`
}

//Customer logged in

const myInfoButton = document.querySelector('#my-info')
const bookingsButton = document.querySelector('#booking-button')
const bookHotelButton = document.querySelector('#book-new-button')
const statMain = document.querySelector('#stat-main')

myInfoButton.addEventListener('click', myInfo)
bookingsButton.addEventListener('click', myBookings)
bookHotelButton.addEventListener('click', bookHotel)

function myInfo() {
  statMain.innerHTML = `
  <li>
    <h1>Name: </h1> 
    <h2> ${hotelData.customers[currentUser - 1].name}</h2>
  </li>
  <li>
    <h1>ID: </h1> 
    <h2> ${hotelData.customers[currentUser - 1].id}</h2>
  </li>
  <li>
  <h1>Location: </h1>
  <h2>Denver, CO </h2>
  </li>
  <li>
    <h1>Amount of trips: </h1>
    <h2>470 </h2>
  </li>
  `
}

function myBookings() {
  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === currentUser)
    console.log(userBookings)
  statMain.innerHTML = `
  <h1 id="stat-title">You currently have ${userBookings.length} bookings!</h2>`
  userBookings.forEach(booking => {
    statMain.innerHTML +=
    `
    <button class="booking-date">${booking.date}</button>
    `
  })
}

function bookHotel() {
  statMain.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">First, choose a month!</h2>`
  genCalender()
}

function genCalender() {
  statMain.innerHTML += 
  `
  <section id="month-buttons">
    <button value="1" class="calender-month-button">January</button>
    <button value="2" class="calender-month-button">February</button>
    <button value="3" class="calender-month-button">March</button>
    <button value="4" class="calender-month-button">April</button>
    <button value="5" class="calender-month-button">May</button>
    <button value="6" class="calender-month-button">June</button>
    <button value="7" class="calender-month-button">July</button>
    <button value="8" class="calender-month-button">August</button>
    <button value="9" class="calender-month-button">September</button>
    <button value="10" class="calender-month-button">October</button>
    <button value="11" class="calender-month-button">November</button>
    <button value="12" class="calender-month-button">December</button>
  </section>
    `
  const calenderButtons = document.querySelectorAll('.calender-month-button')
  calenderButtons.forEach(button => {
    button.addEventListener('click', chooseDay)
  })
}

function chooseDay(Event) {
  currentMonth = Event.target.value
  statMain.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">Now, let's choose a day!</h2>`
  const daysInMonth = getDays(2021, currentMonth);
  for (var i = 1; i < daysInMonth + 1; i++) {
    statMain.innerHTML += 
    `
    <button value="${i}" class="calender-day-button">${i}</button>
    `
  }
  const dayButtons = document.querySelectorAll('.calender-day-button')
  dayButtons.forEach(button => {
    button.addEventListener('click', chooseYear)
  })
}

function chooseYear(Event) {
  currentDay = Event.target.innerText
  console.log(currentDay)
  statMain.innerHTML = ''
  for (var i = 2019; i < 2037; i++) {
    statMain.innerHTML += 
    `
    <button value="${i}" class="calender-year-button">${i}</button>
    `
  }
  const yearButtons = document.querySelectorAll('.calender-year-button')
  yearButtons.forEach(button => {
    button.addEventListener('click', confirmDate)
  })
}

function confirmDate(Event) {
  currentYear = Event.target.innerText
  statMain.innerHTML = `
  <h1 id="stat-title" class="selected-date">You have chosen </h1>
  <h2>${currentMonth}/${currentDay}/${currentYear}</h2>
  <button class="book-button">Yes! Book It.</button>
  <button class="book-button">Change Booking Date.</button>
  `
}

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};