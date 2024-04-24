function partialCall(url, dataType){
    const toExport = [];
    fetch(url).then(
        (response) =>{
            if(response.ok){
                let fulfilledResponse = response.json();
                fulfilledResponse.then(data => {
                    data[dataType].forEach(element => {
                        toExport.push(element);
                    });
                });
            }else{
                throw new Error (`There was a problem retrieving ${dataType} data.`);
            };
        });
    return toExport;
    };
function getUserByID(id){
    let user = {}
    fetch(`http://localhost:3001/api/v1/customers/${id}`).then(
        (response) =>{
            if(response.ok){
                let fulfilledResponse = response.json();
                fulfilledResponse.then(data => {
                    user.information = data
                })
            }
        })
    return user
};
export function fetchUser(id){
    const user = getUserByID(id)
    function getInformation(){
        return user
    }
    return {getInformation}
}
function postBooking(room, ID, date){
    return fetch("http://localhost:3001/api/v1/bookings", {
        method: "POST",
        body: JSON.stringify(
        {
            "userID": ID,
            "date": date,
            "roomNumber": +room.number
        }),
        headers: {"Content-Type": "application/json"}
        }).then((response) =>{
        return response.json()})
        }
export function apiCall(){
    const allRooms = partialCall('http://localhost:3001/api/v1/rooms', 'rooms')
    const allBookings = partialCall('http://localhost:3001/api/v1/bookings', 'bookings')
    function getRooms(){
        return allRooms;
    };
    function getBookings(){
        return allBookings;
    };
    function bookRoom(room, userID, date){
        postBooking(room, userID, date).then((data)=>allBookings.push(data.newBooking))
    }
    return {
        getRooms,
        getBookings,
        bookRoom,
        deleteBooking,
    };
};
// export function getUser(customerID)
