// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

export function createCustomer(id, name) {
    return {
        id: id,
        name: name
    };
}

export function createHotelRoom(number, roomType, bidet, bedSize, numBeds, costPerNight) {
        return {
        number: number,
        roomType: roomType,
        bidet: bidet,
        bedSize: bedSize,
        numBeds: numBeds,
        costPerNight: costPerNight
    };
}

export function createBooking(id, userID, date, roomNumber) {
    return {
        id: id,
        userID: userID,
        date: date,
        roomNumber: roomNumber
    };

}