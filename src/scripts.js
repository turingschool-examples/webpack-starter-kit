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

function renderData() {
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

function customerView() {
  customerNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  dataPane.innerText = `Hello, ${hotelData.customers[49].name}`
}

function adminView() {
  adminNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  title.innerText = "Overlook Admin"
  dataPane.innerText = `Daily Statistics`
}