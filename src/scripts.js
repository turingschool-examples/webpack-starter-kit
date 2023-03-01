import './css/styles.css';
import './images/turing-logo.png'
import HotelData from './classes/hotelData.js'


//Global variables

var isAdmin = sessionStorage.getItem('isAdmin')
var loggedIn = sessionStorage.getItem('loggedIn')
var hotelData

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

//Event Listeners and their variables

const title = document.querySelector('#page-title')
const logInButton = document.querySelector('#log-in-button')
const badLogin = document.querySelector('#bad-login')
const logOutButton = document.querySelector('#log-out')
var login = document.querySelector('#login')
var customerNav = document.querySelector('#customer-buttons')
var adminNav = document.querySelector('#admin-buttons')

logInButton.addEventListener('click', logIn)
logOutButton.addEventListener('click', logOut)

if (loggedIn) {
  checkPrivlage()
}

function renderData() {
  console.log(hotelData)
  console.log(isAdmin)
}

function logIn() {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  if (username === 'customer50' && password === 'overlook2021') {
    isAdmin = false
    checkPrivlage()
  } else if (username === 'manager' && password === 'overlook2021') {
    isAdmin = true
    checkPrivlage()
  } else {
    badLogin.style.display = 'block'
    setTimeout(() => {
      badLogin.style.display = 'none'
    }, 1500)
  }
}

function checkPrivlage() {
  sessionStorage.setItem('loggedIn', true)
  sessionStorage.setItem('isAdmin', isAdmin)
  if (isAdmin) { 
    adminView()
  } else {
    customerView()
  }
}

function logOut() {
  sessionStorage.clear()
  logOutButton.style.display = 'none'
  window.location.href = 'index.html' 
}

function customerView() {
  customerNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
}

function adminView() {
  adminNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  title.innerText = "Overlook Admin"
}