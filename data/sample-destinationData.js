const destinationData = [
  {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  }, {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  },
  {
    "id": 3,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 130,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
  },
  {
    "id": 4,
    "destination": "Cartagena, Colombia",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 350,
    "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "alt": "boats at a dock during the day time"
  },
  {
    "id": 5,
    "destination": "Madrid, Spain",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with clear skys and a road in the day time"
  },
  {
    "id": 6,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 890,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
  },
  {
    "id": 7,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 395,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
  },
  {
    "id": 8,
    "destination": "Tokyo, Japan",
    "estimatedLodgingCostPerDay": 125,
    "estimatedFlightCostPerPerson": 1000,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
    "alt": "city with people walking in crosswalk and brightly lit shops at night"
  },
  {
    "id": 9,
    "destination": "Amsterdam, Netherlands",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "canal with boats and trees and buildings along the side"
  },
  {
    "id": 10,
    "destination": "Toronto, Canada",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 450,
    "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
  },
  {
    "id": 11,
    "destination": "Mikonos, Greece",
    "estimatedLodgingCostPerDay": 140,
    "estimatedFlightCostPerPerson": 1000,
    "image": "https://images.unsplash.com/photo-1573783309724-e44b859f5a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
    "alt": "cityscape along the water during the day"
  },
  {
    "id": 12,
    "destination": "Wellington, New Zealand",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1442483221814-59f7d8b22739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "overview of city with buildings, water and trees"
  },
  {
    "id": 13,
    "destination": "St. Petersburg, Russia",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 1100,
    "image": "https://images.unsplash.com/photo-1556543697-2fb00d31948a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "buildings and people crossing the street carrying shoping bags during the day"
  },
  {
    "id": 14,
    "destination": "Marrakesh, Morocco",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 830,
    "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "alt": "people buying oranges and other fruit from a street vendor"
  },
  {
    "id": 15,
    "destination": "Manila, Philippines",
    "estimatedLodgingCostPerDay": 40,
    "estimatedFlightCostPerPerson": 900,
    "image": "https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "colorful buildings near the water with docked boats"
  },
  {
    "id": 16,
    "destination": "Bangkok, Thailand",
    "estimatedLodgingCostPerDay": 35,
    "estimatedFlightCostPerPerson": 988,
    "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "alt": "ornate buildings with a garden during the day"
  },
  {
    "id": 17,
    "destination": "Jaipur, India",
    "estimatedLodgingCostPerDay": 30,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "a courtyard with trees and mountain in the distance"
  },
  {
    "id": 18,
    "destination": "Cape Town, South Africa",
    "estimatedLodgingCostPerDay": 120,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1522576775862-7168ae29372c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
    "alt": "a city with mountain cliffs by the sea"
  },
  {
    "id": 19,
    "destination": "Quito, Ecuador",
    "estimatedLodgingCostPerDay": 60,
    "estimatedFlightCostPerPerson": 500,
    "image": "https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "a city at night with cloudy, snowy mountains in the distance"
  },
  {
    "id": 20,
    "destination": "Miami, Florida",
    "estimatedLodgingCostPerDay": 158,
    "estimatedFlightCostPerPerson": 275,
    "image": "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80",
    "alt": "sand with palm trees and tall buildings in the background"
  },
  {
    "id": 21,
    "destination": "Tulum, Mexico",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 350,
    "image": "https://images.unsplash.com/photo-1501619593928-bef49688c888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "a donkey standing on the beach"
  },
  {
    "id": 22,
    "destination": "Rome, Italy",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people standing inside a colosseum during the day"
  },
  {
    "id": 23,
    "destination": "Copenhagen, Denmark",
    "estimatedLodgingCostPerDay": 120,
    "estimatedFlightCostPerPerson": 1000,
    "image": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "colorful buildings with holiday decorations by the water with tents and docked boats"
  },
  {
    "id": 24,
    "destination": "Vilnius, Lithuania",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 1100,
    "image": "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "alt": "overhead view of a city with a hot air balloon"
  }
]

export default destinationData;