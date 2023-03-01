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
    console.log(hotelData.bookings)
  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === currentUser)
  console.log(userBookings)
  statMain.innerHTML = 
  `
  <h1 id="stat-title">You currently have ${userBookings.length} bookings!
  <section id="month-buttons">
    <button>January</button>
    <button>February</button>
    <button>March</button>
    <button>April</button>
    <button>May</button>
    <button>June</button>
    <button>July</button>
    <button>August</button>
    <button>September</button>
    <button>October</button>
    <button>November</button>
    <button>December</button>
  </section>
  `
}

function bookHotel() {
  statMain.innerHTML = ''
}

