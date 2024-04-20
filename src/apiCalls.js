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
                console.log(response);
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
export function apiCall(){
    const allRooms = partialCall('http://localhost:3001/api/v1/rooms', 'rooms')
    const allBookings = partialCall('http://localhost:3001/api/v1/bookings', 'bookings')
    function getUsers(){
        return allUsers;
    };
    function getRooms(){
        return allRooms;
    };
    function getBookings(){
        return allBookings;
    };
    return {
        getUsers,
        getRooms,
        getBookings,
    };
};
// export function getUser(customerID)
