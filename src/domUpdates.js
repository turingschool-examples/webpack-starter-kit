import { apiCall, fetchUser} from "./apiCalls";
import { calculateTotalCost, userBookings } from "./bookings";
import { mapRoomsFromBookings, renderUserCard } from "./render";
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
//event listeners
loginButton.addEventListener('click',()=>{
    login(usernameField.value, passwordField.value)
});

profileButton.addEventListener('click',()=>{
    const user = dataModel.customer.getInformation().information
    console.log('hi')
    const bookings = userBookings(
        user.id,
        apiData.getBookings()
    );
    const totalSpent = calculateTotalCost(
        bookings,
        apiData.getRooms()
    );
    console.log(totalSpent)
    userProfile.innerHTML = renderUserCard(user.name,totalSpent)

});
//event handlers
function login(username, password){
    if(!username || !password){
        showElements([loginWarning]);
    } else {
        dataModel.customer = fetchUser(7);
        console.log(dataModel.customer.getInformation());
        hideElements([loginPage, loginWarning]);
        showElements([homePage]);
    };
   
};

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
  