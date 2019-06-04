const users = [
  {
    id: 1,
    name: "Autumn Toy"
  },
  {
    id: 2,
    name: "Jannie VonRueden"
  },
  {
    id: 3,
    name: "Anya Upton"
  },
  {
    id: 4,
    name: "Milo Ankunding"
  },
  {
    id: 5,
    name: "Reginald Schaden"
  },
  {
    id: 6,
    name: "Sedrick Bayer"
  },
  {
    id: 7,
    name: "Kathryn Medhurst"
  },
  {
    id: 8,
    name: "Meredith Jenkins"
  },
  {
    id: 9,
    name: "Florine Jaskolski"
  },
  {
    id: 10,
    name: "Kiel O'Reilly"
  },
  {
    id: 11,
    name: "Jake Jenkins"
  },
  {
    id: 12,
    name: "Maynard Langworth"
  },
  {
    id: 13,
    name: "Lorenz Dare"
  },
  {
    id: 14,
    name: "Lura Kshlerin"
  },
  {
    id: 15,
    name: "Sigurd Hoppe"
  },
  {
    id: 16,
    name: "Julie Reilly"
  },
  {
    id: 17,
    name: "Kianna Walter"
  },
  {
    id: 18,
    name: "Meggie Rice"
  },
  {
    id: 19,
    name: "Muriel McGlynn"
  },
  {
    id: 20,
    name: "Kelley VonRueden"
  },
  {
    id: 21,
    name: "Immanuel Witting"
  },
  {
    id: 22,
    name: "Pearl Harber"
  },
  {
    id: 23,
    name: "Michaela Swaniawski"
  },
  {
    id: 24,
    name: "Kenyon Mohr"
  },
  {
    id: 25,
    name: "Forest Swaniawski"
  },
  {
    id: 26,
    name: "Ervin Larson"
  },
  {
    id: 27,
    name: "Elmer Hyatt"
  },
  {
    id: 28,
    name: "Dominique Beier"
  },
  {
    id: 29,
    name: "Elwyn Homenick"
  },
  {
    id: 30,
    name: "Jeremy Quigley"
  }
];

const bookings = [
  {
    userID: 78,
    date: "01/06/2019",
    roomNumber: 143
  },
  {
    userID: 43,
    date: "01/06/2019",
    roomNumber: 108
  },
  {
    userID: 5,
    date: "31/10/2019",
    roomNumber: 8
  },
  {
    userID: 14,
    date: "17/07/2019",
    roomNumber: 192
  },
  {
    userID: 83,
    date: "15/01/2020",
    roomNumber: 118
  },
  {
    userID: 61,
    date: "07/02/2020",
    roomNumber: 158
  },
  {
    userID: 26,
    date: "22/02/2020",
    roomNumber: 73
  },
  {
    userID: 34,
    date: "21/10/2019",
    roomNumber: 97
  },
  {
    userID: 62,
    date: "07/10/2019",
    roomNumber: 51
  },
  {
    userID: 26,
    date: "18/07/2019",
    roomNumber: 123
  },
  {
    userID: 88,
    date: "17/11/2019",
    roomNumber: 99
  },
  {
    userID: 45,
    date: "19/08/2019",
    roomNumber: 166
  },
  {
    userID: 92,
    date: "22/09/2019",
    roomNumber: 21
  },
  {
    userID: 69,
    date: "03/11/2019",
    roomNumber: 28
  },
  {
    userID: 76,
    date: "14/06/2019",
    roomNumber: 124
  },
  {
    userID: 26,
    date: "16/07/2019",
    roomNumber: 169
  },
  {
    userID: 7,
    date: "29/09/2019",
    roomNumber: 50
  },
  {
    userID: 48,
    date: "06/11/2019",
    roomNumber: 150
  },
  {
    userID: 67,
    date: "03/10/2019",
    roomNumber: 3
  },
  {
    userID: 46,
    date: "04/08/2019",
    roomNumber: 180
  },
  {
    userID: 2,
    date: "30/10/2019",
    roomNumber: 31
  },
  {
    userID: 77,
    date: "16/01/2020",
    roomNumber: 26
  },
  {
    userID: 41,
    date: "07/01/2020",
    roomNumber: 78
  },
  {
    userID: 35,
    date: "05/11/2019",
    roomNumber: 175
  },
  {
    userID: 54,
    date: "06/07/2019",
    roomNumber: 24
  },
  {
    userID: 30,
    date: "29/01/2020",
    roomNumber: 100
  },
  {
    userID: 38,
    date: "30/01/2020",
    roomNumber: 7
  },
  {
    userID: 29,
    date: "17/03/2020",
    roomNumber: 62
  },
  {
    userID: 24,
    date: "07/01/2020",
    roomNumber: 161
  },
  {
    userID: 82,
    date: "05/06/2019",
    roomNumber: 4
  },
  {
    userID: 94,
    date: "06/03/2020",
    roomNumber: 17
  },
  {
    userID: 90,
    date: "09/01/2020",
    roomNumber: 161
  },
  {
    userID: 49,
    date: "27/11/2019",
    roomNumber: 42
  },
  {
    userID: 81,
    date: "11/12/2019",
    roomNumber: 165
  },
  {
    userID: 87,
    date: "06/01/2020",
    roomNumber: 130
  },
  {
    userID: 91,
    date: "24/01/2020",
    roomNumber: 101
  }
];

const roomServices = [
  {
    userID: 34,
    date: "01/06/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
  },
  {
    userID: 34,
    date: "01/06/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
  },
  {
    userID: 37,
    date: "24/12/2019",
    food: "Generic Soft Sandwich",
    totalCost: 24.24
  },
  {
    userID: 9,
    date: "01/06/2019",
    food: "Tasty Fresh Sandwich",
    totalCost: 13.07
  },
  {
    userID: 22,
    date: "01/01/2020",
    food: "Rustic Soft Sandwich",
    totalCost: 18.63
  },
  {
    userID: 90,
    date: "09/01/2020",
    food: "Sleek Concrete Sandwich",
    totalCost: 15.97
  },
  {
    userID: 98,
    date: "19/07/2019",
    food: "Rustic Wooden Sandwich",
    totalCost: 5.86
  },
  {
    userID: 34,
    date: "21/10/2019",
    food: "Intelligent Metal Sandwich",
    totalCost: 7.57
  },
  {
    userID: 97,
    date: "22/10/2019",
    food: "Sleek Metal Sandwich",
    totalCost: 9.38
  },
  {
    userID: 80,
    date: "24/01/2020",
    food: "Tasty Granite Sandwich",
    totalCost: 5.7
  },
  {
    userID: 25,
    date: "17/12/2019",
    food: "Ergonomic Fresh Sandwich",
    totalCost: 19.16
  },
  {
    userID: 68,
    date: "27/10/2019",
    food: "Intelligent Frozen Sandwich",
    totalCost: 21.6
  },
  {
    userID: 30,
    date: "29/01/2020",
    food: "Intelligent Metal Sandwich",
    totalCost: 23.02
  },
  {
    userID: 66,
    date: "27/01/2020",
    food: "Handmade Frozen Sandwich",
    totalCost: 22.69
  },
  {
    userID: 36,
    date: "02/11/2019",
    food: "Handmade Steel Sandwich",
    totalCost: 11.16
  },
  {
    userID: 26,
    date: "10/07/2019",
    food: "Unbranded Plastic Sandwich",
    totalCost: 9.6
  },
  {
    userID: 26,
    date: "04/12/2019",
    food: "Unbranded Wooden Sandwich",
    totalCost: 8.7
  },
  {
    userID: 74,
    date: "18/07/2019",
    food: "Handmade Cotton Sandwich",
    totalCost: 17.39
  },
  {
    userID: 36,
    date: "02/11/2019",
    food: "Refined Granite Sandwich",
    totalCost: 8.19
  },
  {
    userID: 26,
    date: "22/06/2019",
    food: "Incredible Fresh Sandwich",
    totalCost: 8.2
  },
  {
    userID: 39,
    date: "23/10/2019",
    food: "Rustic Frozen Sandwich",
    totalCost: 17.26
  },
  {
    userID: 26,
    date: "06/07/2019",
    food: "Generic Rubber Sandwich",
    totalCost: 7.62
  },
  {
    userID: 35,
    date: "05/11/2019",
    food: "Gorgeous Metal Sandwich",
    totalCost: 8.23
  }
];


const rooms = [
  {
    number: 1,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 344.58
  },
  {
    number: 2,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 462.7
  },
  {
    number: 3,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 344.89
  },
  {
    number: 4,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
  },
  {
    number: 5,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 269.65
  },
  {
    number: 6,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 426.45
  },
  {
    number: 7,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 441.66
  },
  {
    number: 8,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 254.9
  },
  {
    number: 9,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 405.85
  },
  {
    number: 10,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 275.32
  },
  {
    number: 11,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 493.85
  },
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 176.99
  },
  {
    number: 13,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 417.08
  },
  {
    number: 14,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 217.17
  },
  {
    number: 15,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 159.65
  },
  {
    number: 16,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 239.54
  },
  {
    number: 17,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 259.06
  },
  {
    number: 18,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.27
  },
  {
    number: 19,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 229.67
  },
  {
    number: 20,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 258.1
  },
  {
    number: 21,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 440.09
  },
  {
    number: 22,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 158.81
  },
  {
    number: 23,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 447.75
  },
  {
    number: 24,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 157.83
  },
  {
    number: 25,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 377.66
  },
  {
    number: 26,
    roomType: "junior suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 277.55
  },
  {
    number: 27,
    roomType: "residential suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 275.09
  },
  {
    number: 28,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 280.43
  },
  {
    number: 29,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 290.21
  },
  {
    number: 30,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 300.61
  },
  {
    number: 31,
    roomType: "suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 230.2
  },
  {
    number: 32,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 375.33
  },
  {
    number: 33,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 272.92
  },
  {
    number: 34,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 445.3
  },
  {
    number: 35,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 348.18
  },
  {
    number: 36,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 419.33
  },
  {
    number: 37,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 478.01
  },
  {
    number: 38,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 459.64
  },
  {
    number: 39,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 433.21
  },
  {
    number: 40,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 466.12
  },
  {
    number: 41,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 281.26
  },
  {
    number: 42,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 452.79
  },
  {
    number: 43,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 382.01
  },
  {
    number: 44,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 377.35
  },
  {
    number: 45,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 216.73
  },
  {
    number: 46,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 319.37
  },
  {
    number: 47,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 353.72
  },
  {
    number: 48,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 481.24
  },
  {
    number: 49,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 195.46
  },
  {
    number: 50,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 471.8
  },
  {
    number: 51,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 499.3
  },
  {
    number: 52,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 186.28
  },
  {
    number: 53,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 289.19
  },
  {
    number: 54,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 302.11
  },
  {
    number: 55,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 276.79
  },
  {
    number: 56,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 480.91
  },
  {
    number: 57,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 293.22
  },
  {
    number: 58,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 216.08
  },
  {
    number: 59,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 239.36
  },
  {
    number: 60,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 295.54
  },
  {
    number: 61,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 277.49
  },
  {
    number: 62,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 461.93
  },
  {
    number: 63,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 199.33
  },
  {
    number: 64,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 340.09
  },
  {
    number: 65,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 163.7
  },
  {
    number: 66,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 413.95
  },
  {
    number: 67,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 287.81
  },
  {
    number: 68,
    roomType: "suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 341.38
  },
  {
    number: 69,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 339.58
  },
  {
    number: 70,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 291.41
  },
  {
    number: 71,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 364.83
  },
  {
    number: 72,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 371.81
  },
  {
    number: 73,
    roomType: "junior suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 317.58
  },
  {
    number: 74,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 345.15
  },
  {
    number: 75,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 258.2
  },
  {
    number: 76,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 213.13
  },
  {
    number: 77,
    roomType: "junior suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 156.16
  },
  {
    number: 78,
    roomType: "single room",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 475.24
  },
  {
    number: 79,
    roomType: "suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 402.2
  },
  {
    number: 80,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 231.56
  },
  {
    number: 81,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 423.2
  },
  {
    number: 82,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 477.31
  },
  {
    number: 83,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 152.42
  },
  {
    number: 84,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 326.71
  },
  {
    number: 85,
    roomType: "single room",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 453.35
  },
  {
    number: 86,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 375.67
  },
  {
    number: 87,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 223.72
  },
  {
    number: 88,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 449.85
  },
  {
    number: 89,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 387.76
  },
  {
    number: 90,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 349.33
  },
  {
    number: 91,
    roomType: "suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 413.32
  },
  {
    number: 92,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 485.79
  },
  {
    number: 93,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 283.84
  },
  {
    number: 94,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 278.11
  },
  {
    number: 95,
    roomType: "single room",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 380.72
  },
  {
    number: 96,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 425.47
  },
  {
    number: 97,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 433.56
  },
  {
    number: 98,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 331.47
  },
  {
    number: 99,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 496.48
  },
  {
    number: 100,
    roomType: "suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 336.78
  },
  {
    number: 101,
    roomType: "junior suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 470.98
  },
  {
    number: 102,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 258.58
  },
  {
    number: 103,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 422.42
  },
  {
    number: 104,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 483.98
  },
  {
    number: 105,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 343.61
  },
  {
    number: 106,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 310.74
  },
  {
    number: 107,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 236.11
  },
  {
    number: 108,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 234.34
  },
  {
    number: 109,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 213.33
  },
  {
    number: 110,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 274.16
  },
  {
    number: 111,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 457.4
  },
  {
    number: 112,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 229.53
  },
  {
    number: 113,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 238.93
  },
  {
    number: 114,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 448.01
  },
  {
    number: 115,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 271.34
  },
  {
    number: 116,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 216.94
  },
  {
    number: 117,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 226.14
  },
  {
    number: 118,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 336.67
  },
  {
    number: 119,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 151.2
  },
  {
    number: 120,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 150.14
  },
  {
    number: 121,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 187.34
  },
  {
    number: 122,
    roomType: "junior suite",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 360.29
  },
  {
    number: 123,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 380.84
  },
  {
    number: 124,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 319.08
  },
  {
    number: 125,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 261.3
  },
  {
    number: 126,
    roomType: "single room",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 485.38
  },
  {
    number: 127,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 398.35
  },
  {
    number: 128,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 262.19
  },
  {
    number: 129,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 432.21
  },
  {
    number: 130,
    roomType: "single room",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 322.35
  },
  {
    number: 131,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 240.27
  },
  {
    number: 132,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 484.2
  },
  {
    number: 133,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 308.09
  },
  {
    number: 134,
    roomType: "single room",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 425.97
  },
  {
    number: 135,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 370.43
  },
  {
    number: 136,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 264.27
  },
  {
    number: 137,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 322.08
  },
  {
    number: 138,
    roomType: "suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 209.91
  },
  {
    number: 139,
    roomType: "junior suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 312.22
  },
  {
    number: 140,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 317.7
  },
  {
    number: 141,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 481.3
  },
  {
    number: 142,
    roomType: "residential suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 358.48
  },
  {
    number: 143,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 476.07
  },
  {
    number: 144,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 269.92
  },
  {
    number: 145,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 451.44
  },
  {
    number: 146,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 300.68
  },
  {
    number: 147,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 167.17
  },
  {
    number: 148,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 274.82
  },
  {
    number: 149,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 465.01
  },
  {
    number: 150,
    roomType: "single room",
    bidet: true,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 412.73
  },
  {
    number: 151,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 385.52
  },
  {
    number: 152,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 300.73
  },
  {
    number: 153,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 443.05
  },
  {
    number: 154,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 359.64
  },
  {
    number: 155,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 306.63
  },
  {
    number: 156,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 422.43
  },
  {
    number: 157,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 213.88
  },
  {
    number: 158,
    roomType: "suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 463.67
  },
  {
    number: 159,
    roomType: "suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 304.24
  },
  {
    number: 160,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 260.5
  },
  {
    number: 161,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 259.13
  },
  {
    number: 162,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 247.35
  },
  {
    number: 163,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 352.78
  },
  {
    number: 164,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 462.51
  },
  {
    number: 165,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 394.91
  },
  {
    number: 166,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 159.58
  },
  {
    number: 167,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 375.53
  },
  {
    number: 168,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 188.5
  },
  {
    number: 169,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 166.62
  },
  {
    number: 170,
    roomType: "junior suite",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 413.56
  },
  {
    number: 171,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 406.3
  },
  {
    number: 172,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 497.38
  },
  {
    number: 173,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 373.92
  },
  {
    number: 174,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 336.15
  },
  {
    number: 175,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 375.69
  },
  {
    number: 176,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 428.44
  },
  {
    number: 177,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 355.31
  },
  {
    number: 178,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 307.34
  },
  {
    number: 179,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.16
  },
  {
    number: 180,
    roomType: "single room",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 416.36
  },
  {
    number: 181,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 347.86
  },
  {
    number: 182,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 266.8
  },
  {
    number: 183,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 280.52
  },
  {
    number: 184,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 412.95
  },
  {
    number: 185,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 393.35
  },
  {
    number: 186,
    roomType: "junior suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 261.47
  },
  {
    number: 187,
    roomType: "single room",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 355.02
  },
  {
    number: 188,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 302.4
  },
  {
    number: 189,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 275.71
  },
  {
    number: 190,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 459.23
  },
  {
    number: 191,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 355.09
  },
  {
    number: 192,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 402.3
  },
  {
    number: 193,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 287.1
  },
  {
    number: 194,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 290.17
  },
  {
    number: 195,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 169.93
  },
  {
    number: 196,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 208
  },
  {
    number: 197,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 347.46
  },
  {
    number: 198,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 306.23
  },
  {
    number: 199,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 333.91
  },
  {
    number: 200,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 446.97
  }
];

export default { users, rooms, bookings, roomServices };
