//<><>fetch calls<><>
const getAllUsers = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json());
const getAllRooms = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json());
const getAllBookings = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json());
const promises = [getAllUsers, getAllRooms, getAllBookings];


function getAllData() {
    return Promise.all(promises)
    .then(data => {
        // console.log('fuck', data)
        return data})
    .catch(error => console.log(error))
    }

export {
    getAllData
}