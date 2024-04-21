//<><>fetch calls<><>
const getAllUsers = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json());
const getAllRooms = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json());
const getAllBookings = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json());
const promises = [getAllUsers, getAllRooms, getAllBookings];

//<><>functions<><>
function getAllData() {
    return Promise.all(promises)
    .then(data => {
        return data})
    .catch(error => console.log(error))
    }

function addBooking(bookingData) {
    return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify(bookingData),
        headers: { "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(error)
        } else {
            return response.json()
        }
    })
    .catch(error => console.log('this errror', error))
}

function cancelBooking(bookingId) {
    return fetch(`http://localhost:3001/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
          }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(error)
        } else {
            return response.json()
        }
    })
    .catch(error => console.log('this errror', error))
}

export {
    getAllData,
    addBooking,
    cancelBooking
}