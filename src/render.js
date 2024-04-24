function renderUserCard(username, totalCost){
    const formatedCost = costToString(totalCost);
    return `<li class="username-card">${username}</li>\n<li class="totalspent">Total Spent: ${formatedCost}</li>`;
};

function renderRoomCards(rooms, location, bookings){
    const roomCards = rooms.map((room, cardID)=>{
        const roomCard = renderRoomCard(room, cardID, location, bookings);
        return roomCard
    });
    return roomCards
};

function renderRoomCard(room, cardID, location, bookings){
    let button;
    let date; 
    if(location){
        button = `<button id=book-${cardID} class="book-booking">Book Room</button>`
        date = ' '
    } else {
        button = ' '
        date = `<li class = "card-text">booked for: ${bookings[cardID].date}</li>`
    }
    let hasBidet;
    if(room.bidet){
        hasBidet = 'has'
    } else {
        hasBidet = 'does not have'
    }
    const card = 
`<ul id="card-${cardID}" class="room-card">
    <li class="card-text">Room Number: ${room.number}</li>
    <li class="card-text">${room.roomType}.</li>
    <li class="card-text">${room.numBeds} ${room.bedSize} bed(s).</li>
    <li class="card-text">This room ${hasBidet} a bidet.</li>
    <li class="card-text">${costToString(room.costPerNight)} per night.</li>
    ${button}
    ${date}
</ul>`
    return card
};
function mapRoomsFromBookings(bookings, rooms){
    return bookings.map((booking)=>{
        const result = rooms.find((room) => room.number === booking.roomNumber)

        return result
    })
}
function costToString(cost){
    if(!cost){
        return '0.00$';
    };
    const splitCost = cost.toString().split('.');
    if(splitCost[1].length < 2){
        splitCost[1]+= '0';
    }
    const formated = `${splitCost[0]}.${splitCost[1].substring(0,2)}$`;
    return formated;
};

export{
    renderUserCard,
    renderRoomCards,
    mapRoomsFromBookings,
};