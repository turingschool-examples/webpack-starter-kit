function renderUserCard(username, totalCost){
    const formatedCost = costToString(totalCost);
    return `<li class="username-card">${username}</li>\n<li class="totalspent">Total Spent: ${formatedCost}</li>`;
};

function renderRoomCards(rooms){
    const roomCards = rooms.map((room, cardID)=>{
        const roomCard = renderRoomCard(room, cardID);
        return roomCard
    });
    return roomCards
};

function renderRoomCard(room, cardID){
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
</ul>`
    return card
};

function costToString(cost){
    if(!cost){
        return '0.00$';
    };
    const splitCost = cost.toString().split('.');
    if(splitCost[1].length < 2){
        splitCost[1]+= '0';
    };
    const formated = `${splitCost[0]}.${splitCost[1]}$`;
    return formated;
};

export{
    renderUserCard,
    renderRoomCards
};