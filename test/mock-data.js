export const bookings = [
  {
    id: "aaa",
    userID: 1,
    date: "2022/04/22",
    roomNumber: 10,
  },
  {
    id: "bbb",
    userID: 2,
    date: "2022/01/24",
    roomNumber: 11,
  },
  {
    id: "ccc",
    userID: 3,
    date: "2022/01/10",
    roomNumber: 12,
  },
  {
    id: "ddd",
    userID: 3,
    date: "2022/01/10",
    roomNumber: 13,
  },
  {
    id: "eee",
    userID: 1,
    date: "2022/01/10",
    roomNumber: 14,
  },
];

export const rooms = [
  {
    number: 10,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 358.4,
  },
  {
    number: 11,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 477.38,
  },
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 491.14,
  },
  {
    number: 13,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 429.44,
  },
  {
    number: 14,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 340.17,
  },
];

export const customers = [
  {
    id: 1,
    name: "Leatha Ullrich",
  },
  {
    id: 2,
    name: "Rocio Schuster",
  },
  {
    id: 3,
    name: "Kelvin Schiller",
  },
  {
    id: 12,
    name: "Rocio Schuster",
  },
];

export const userBookings = [
  {
    title: "residential suite",
    numBeds: 1,
    bedSize: "queen",
    dateBooked: "2022/04/22",
    costPerNight: 358.4,
  },
  {
    title: "single room",
    numBeds: 2,
    bedSize: "queen",
    dateBooked: "2022/01/10",
    costPerNight: 340.17,
  },
];

export const bookedRoomsForSadPath =[
    {
        id: "ccc",
        userID: 3,
        date: "2022/01/10",
        roomNumber: 12,
      },
      {
        id: "ddd",
        userID: 3,
        date: "2022/01/10",
        roomNumber: 13,
      }
]
