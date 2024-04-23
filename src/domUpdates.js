import { apiCall, fetchUser} from "./apiCalls";
import { calculateTotalCost, userBookings } from "./bookings";
import { mapRoomsFromBookings, renderRoomCards, renderUserCard } from "./render";
import { dataModel, apiData } from "./scripts";

const profileButton = document.getElementById('user-profile');
const userProfile = document.getElementById('user-card')
const searchButton = document.getElementById('search-rooms');
const loginButton = document.getElementById('login');
const loginWarning = document.getElementById('invalid-login')
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const dateSelect = document.getElementById('date-select');
const roomDropdown = document.getElementById('room-type');
const loginPage = document.getElementById('login-page')
const homePage = document.getElementById('homepage')
const bookingsRooms = document.getElementById('bookings-rooms')
//event listeners
loginButton.addEventListener('click',()=>{
    login(usernameField.value, passwordField.value)
});

profileButton.addEventListener('click',()=>{
    displayUser()
});
//event handlers
function login(username, password){
    if(!username || !password){
        showElements([loginWarning]);
    } else {
        dataModel.customer = fetchUser(7);
        hideElements([loginPage, loginWarning]);
        showElements([homePage]);
        setTimeout(()=>{
            displayUser()
        },100)
    };
};

function displayUser(){
    const user = dataModel.customer.getInformation().information
    const bookings = userBookings(user.id,apiData.getBookings());
    const totalSpent = calculateTotalCost(bookings,apiData.getRooms());
    userProfile.innerHTML = renderUserCard(user.name,totalSpent)
    if(typeof bookings === 'object'){
        const toRender = mapRoomsFromBookings(bookings, apiData.getRooms())
        const roomCards = renderRoomCards(toRender)
        roomCards.forEach(card => {
            bookingsRooms.innerText+= card  
        });
    } else {
        console.log('evil')
    }
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
  