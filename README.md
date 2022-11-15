# Overlook
Created by Colin Ciervo

This project is called Overlook, it is a site that tracks hotel bookings made by customers and allows them to book hotel rooms for upcoming trips.

Starter repo this project is based off of: (https://github.com/turingschool-examples/webpack-starter-kit) 

Overlook-api repo: (https://github.com/turingschool-examples/overlook-api)


## Set-up

1. Clone down this repo to your local machine
2. Clone down the Overlook-api repo to your local machine
3. Run npm `npm start` for the Overlook-api
4. Run npm `npm start` for Overlook
5. Navigate to `localhost:8080` in your browser


## Technologies/Languages Used

1. JavaScript
2. HTML
3. CSS
4. Testing Mocha/Chai

## Code Architecture

The *src* folder contains:

- The only class utilized in this project is `Customer.js`
- `apiCalls.js` which holds the `.fetch()`, `Promise.all()` and `POST`
- `scripts.js` where all of the DOM manipulation occurs

The *test* folder holds all of tests for the `Customer`.

The *dist* folder contains `index.html` as wells as Webpack.


## Future Features

1. Implementing a manager login that allows a manager to delete and add bookings to a selected customer as well as see total revenue for the day and all available bookings.
2. Add more security to the login page