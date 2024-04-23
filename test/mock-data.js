 const users = [
    {id: 1, name: "Milo Anthony"},
    {id: 2, name: "Karen Kendricks"},
    {id: 3, name: "Karissa Sims"}
]
 const rooms = [
    {
        number: 1,
        roomType: "presidential",
        bidet: true, 
        bedSize: "california king",
        numBeds: 1,
        costPerNight: 650.45
    },
    {
        number:2,
        roomType:"suite",
        bidet: false, 
        bedSize: "full",
        numBeds: 2,
        costPerNight: 378.42
    },
    {
        number:3,
        roomType:"suite",
        bidet: true, 
        bedSize: "full",
        numBeds: 2,
        costPerNight: 452.86
    }
];
const bookings = [
    {
        id:"5fwrgu4i7k55hl6sz", 
        userID:1, 
        date:"2024/5/25", 
        roomNumber:1
    },
    {
        id:"5fwrgu4i7k55hl6t6", 
        userID:1, 
        date:"2024/9/25", 
        roomNumber:2
    },
    {
        id:"5fwrgu4i7k55hl6t9", 
        userID:1, 
        date:"2024/4/20", 
        roomNumber:3
    },
    {
        id:"5fwrgu4i7k55hl6sa", 
        userID:1, 
        date:"2024/4/25", 
        roomNumber:1
    },
    {
        id:"5fwrgu4i7k55hl6t1", 
        userID:2, 
        date:"2024/4/25", 
        roomNumber:2
    },
    {
        id:"5fwrgu4i7k55hl6tp", 
        userID:3, 
        date:"2024/4/25", 
        roomNumber:3
    }
    
]

module.exports = {
    users,
    rooms,
    bookings
}