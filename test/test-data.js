const rooms = [
    {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    },
    {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    },
    {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
    },
    {
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
    },
    {
      "number": 5,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 340.17
    },
    {
      "number": 6,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 397.02
    }
]
const rooms_1 = [
    {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    },
    {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    },
    {
      "number": 5,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 340.17
    },
    {
      "number": 6,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 397.02
    }
]
const rooms_2 = [{
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
  },
  {
    "number": 4,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 429.44
  },
  {
    "number": 5,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 340.17
  }]

const bookings = [
    {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2025/04/22",
      "roomNumber": 1,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 9,
      "date": "2025/01/24",
      "roomNumber": 1,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2025/01/10",
      "roomNumber": 2,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t7",
      "userID": 20,
      "date": "2025/02/16",
      "roomNumber": 2,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2025/02/05",
      "roomNumber": 5,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t9",
      "userID": 9,
      "date": "2025/12/14",
      "roomNumber": 3,
  
    },
    {
      "id": "5fwrgu4i7k55hl6ta",
      "userID": 25,
      "date": "2025/01/11",
      "roomNumber": 1,
  
    },
    {
      "id": "5fwrgu4i7k55hl6tb",
      "userID": 49,
      "date": "2025/02/06",
      "roomNumber": 5,
  
    },
    {
      "id": "5fwrgu4i7k55hl6tc",
      "userID": 22,
      "date": "2025/11/30",
      "roomNumber": 3,
  
    },
    {
      "id": "5fwrgu4i7k55hl6td",
      "userID": 27,
      "date": "2025/11/30",
      "roomNumber": 4,
  
    },
    {
      "id": "5fwrgu4i7k55hl6te",
      "userID": 44,
      "date": "2025/01/19",
      "roomNumber": 3,
  
    },
    {
      "id": "5fwrgu4i7k55hl6tf",
      "userID": 36,
      "date": "2025/01/25",
      "roomNumber": 2,
  
    },
    {
      "id": "5fwrgu4i7k55hl6tg",
      "userID": 34,
      "date": "2025/02/03",
      "roomNumber": 2,
  
    }
]
const bookings_full = [
    {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2025/06/23",
      "roomNumber": 1,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 9,
      "date": "2025/06/23",
      "roomNumber": 4,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2025/06/23",
      "roomNumber": 2,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t7",
      "userID": 20,
      "date": "2025/06/23",
      "roomNumber": 3,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2025/06/23",
      "roomNumber": 5,
  
    },
    {
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 1,
        "date": "2025/06/23",
        "roomNumber": 6,
    
      }]
const bookingsForRender =[
  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2025/04/22",
    "roomNumber": 3,

  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 9,
    "date": "2025/01/24",
    "roomNumber": 4,

  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 13,
    "date": "2025/01/10",
    "roomNumber": 5,

  }
];
const sampleUsers = [
    {
        "id": 1,
        "name": "Rhiannon Little"
      },
      {
        "id": 9,
        "name": "Fleta Schuppe"
      },
      {
        "id": 7,
        "name": "Dell Rath"
      }
]
const roomRenders = [
`<ul id="card-0" class="room-card">
    <li class="card-text">Room Number: 3</li>
    <li class="card-text">single room.</li>
    <li class="card-text">1 king bed(s).</li>
    <li class="card-text">This room does not have a bidet.</li>
    <li class="card-text">491.14$ per night.</li>
</ul>`,
`<ul id="card-1" class="room-card">
    <li class="card-text">Room Number: 4</li>
    <li class="card-text">single room.</li>
    <li class="card-text">1 queen bed(s).</li>
    <li class="card-text">This room does not have a bidet.</li>
    <li class="card-text">429.44$ per night.</li>
</ul>`,
`<ul id="card-2" class="room-card">
    <li class="card-text">Room Number: 5</li>
    <li class="card-text">single room.</li>
    <li class="card-text">2 queen bed(s).</li>
    <li class="card-text">This room has a bidet.</li>
    <li class="card-text">340.17$ per night.</li>
</ul>`
]
export {
    rooms,
    bookings,
    bookings_full,
    sampleUsers,
    rooms_1,
    rooms_2,
    roomRenders,
    bookingsForRender
}