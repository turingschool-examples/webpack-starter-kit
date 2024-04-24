import { expect } from "chai";
import { apiCall, fetchUser} from "./apiCalls";
import { calculateTotalCost, userBookings } from "./bookings";
import { buttonRender, mapRoomsFromBookings, renderRoomCards, renderUserCard } from "./render";
import { dataModel, apiData } from "./scripts";
import { convertDate, filterRoomsByDate, filterRoomsByType } from "./search";

const profileButton = document.getElementById('user-profile');
const userProfile = document.getElementById('user-card')
const searchButton = document.getElementById('search-rooms');
const loginButton = document.getElementById('login');
const loginWarning = document.getElementById('invalid-login')
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const dateSelect = document.getElementById('date-select');
const roomDropdown = document.getElementById('room-type');
const search = document.getElementById('search')
const loginPage = document.getElementById('login-page')
const homePage = document.getElementById('homepage')
const bookingsRooms = document.getElementById('bookings-rooms')
restrictDate()

//event listeners
document.addEventListener("click", (event)=>{
    const target = event.target.closest('.book-booking');
    if(target){
        const user = dataModel.customer.getInformation().information
        const roomID = target.id.match(/(\d+)/)[0]
        const toBook = dataModel.trackedRooms[roomID]
        console.log(user.id)
        convertDate(dateSelect.value)
        apiData.bookRoom(toBook,user.id,convertDate(dateSelect.value))
        target.innerText = 'Booking Successful!'
        target.classList.remove('book-booking')
    }
  });
loginButton.addEventListener('click',()=>{
    login(usernameField.value, passwordField.value)
});

searchButton.addEventListener('click',()=>{
    hideElements([userProfile])
    showElements([search])
    displaySearch()
});

profileButton.addEventListener('click',()=>{
    showElements([userProfile])
    hideElements([search])
    displayUser()
});

search.addEventListener('change',()=>{
    displaySearch()
});

//event handlers
function login(username, password){
    let user;
     if(!username.includes('customer') || !(password === "overlook2021")){
        showElements([loginWarning]);
    } else {
            try{
            user= username.match(/(\d+)/)[0]
            } catch (error){
                if(error.message.includes("(reading '0')")){
                    console.error('User did not input a number')
                    showElements([loginWarning]);
                    return;
                } else {
                    console.error(error)
                };
            }
        dataModel.customer = fetchUser(user);
        hideElements([loginPage, loginWarning]);
        showElements([homePage]);
        setTimeout(()=>{
            try{
                displayUser()
            } catch {
                throw new Error('Server Response Timeout: Login Failed')
            }
        },1000)
    };
};
function displaySearch(){
    bookingsRooms.classList.add('available')
    const availableRooms = bookingsRooms.classList.contains('available')
    bookingsRooms.innerHTML=''
    let toRender = filterRoomsByDate(apiData.getRooms(),apiData.getBookings(),dateSelect.value)
    toRender = filterRoomsByType(toRender, roomDropdown.value)
    dataModel.trackedRooms = toRender
    console.log(toRender)
    if(typeof toRender === 'object'){
        const roomCards = renderRoomCards(toRender, availableRooms)
        roomCards.forEach(card => {
            bookingsRooms.innerHTML+=card
        });
    } else {
        bookingsRooms.innerHTML = toRender
    }
    
}
function displayUser(){
    bookingsRooms.classList.remove('available')
    const availableRooms = bookingsRooms.classList.contains('available')
    bookingsRooms.innerHTML=''
    const user = dataModel.customer.getInformation().information
    const bookings = userBookings(user.id,apiData.getBookings());
    dataModel.trackedBookings = bookings
    const totalSpent = calculateTotalCost(bookings,apiData.getRooms());
    userProfile.innerHTML = renderUserCard(user.name,totalSpent)
    if(typeof bookings === 'object'){
        const toRender = mapRoomsFromBookings(bookings, apiData.getRooms())
        dataModel.trackedRooms = toRender
        console.log(dataModel.trackedBookings,dataModel.trackedRooms)
        const roomCards = renderRoomCards(toRender, availableRooms, dataModel.trackedBookings)
       
        roomCards.forEach(card => {
            bookingsRooms.innerHTML+= card  
        });
    } else {
        bookingsRooms.innerText = bookings
    }
}
function restrictDate(){
    const currentDate = new Date()
    const stringDate = currentDate.toLocaleDateString("en-GB").split('/').reverse().join('-');
    dateSelect.min = stringDate
}
function hideElements(elementArray) {
    elementArray.forEach((element) => {
      element.classList.add("hidden");
      element.ariaHidden = true;
    });
  }
  
  function showElements(elementArray) {
    elementArray.forEach((element) => {
      element.classList.remove("hidden");
      element.ariaHidden = false;
    });
  }
  