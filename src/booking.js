const createLogin = (user,password)=> {
    let login ={
        username:`${user}`,
        password:"overlook2021"
    }
    if(!user || !password){
        return 'Please fill out inputs'
    } else if (user !== login.username || password !== login.password){
        return 'Invalid username and/or password'
    } else {
        return login
    }
}
const filterRoomsByDate = (rooms, bookings, date) => {
    let bookedRooms = [];
    bookings.forEach(booking => {
        if (booking.date === date) {
            bookedRooms.push(booking.roomNumber);
        }
    });
    let availableRooms = rooms.filter(room => {
        return !bookedRooms.includes(room.number);
    });
    if (availableRooms.length === 0) {
        return 'No Rooms Available';
    }
    return availableRooms;
};

const filterRoomsByType= (rooms, type) =>{
    let roomType = rooms.filter(room =>{
        return room.roomType === type
    })
    return roomType
};

module.exports = {
    createLogin,
    filterRoomsByDate,
    filterRoomsByType,
}