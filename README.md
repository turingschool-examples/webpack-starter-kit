# Overlook Hotel

## Introduction

The Overlook Hotel is an application where users can book hotel rooms. The user can book rooms by date, and by room type as long as there is availability. Customers can also view their upcoming and past stays. As a manager, users can see hotel information, add and delete bookings for a customer, and see any customers bookings.  

This application was written by [Dani Bagley ](https://github.com/daniabee), a Mod 2 Frontend Engineering student at [Turing School of Software & Design](https://turing.edu/).

**Login View**

Upon opening the applications, the user is shown a login page where they can login with a customers username and password or managers username and password.

<img width="1440" alt="loginView" src="https://user-images.githubusercontent.com/108088961/201993218-a12ed7d3-0de7-41d9-9625-b0070c087251.png">

**Welcome View**

When the user logs in, they are taken to a welcome page that displays their name or their employee title.

<img width="1422" alt="WelcomView" src="https://user-images.githubusercontent.com/108088961/201993749-4ad89b26-c0a6-46e4-8b89-7e34414d95eb.png">

**Check Availability By Date & Room Type**

A user can check room availabilty by date. They can narrow their search by choosing what type of room they are looking for.

https://user-images.githubusercontent.com/108088961/201994789-dd03e275-e7a9-4ead-bbfc-04ba34ea381e.mov

**Book Room**

A user can double click or tab to the room and press enter to book a room for the current set or loged in customer.

https://user-images.githubusercontent.com/108088961/201995246-8f182d94-0ce0-4daf-8f39-65a3d85d0618.mov

**See Customer Bookings**

A user can see all bookings associated with a customer.

<img width="1424" alt="CustomerBookings" src="https://user-images.githubusercontent.com/108088961/201995517-de66e54f-84ad-49f4-8660-8378b4a21301.png">

**Manager Dashboard**

A manager can add and search rooms like a customer, but they can choose which costumer they are booking for and see todays information for the hotel in their dashboard.

<img width="1440" alt="ManagerDashboard" src="https://user-images.githubusercontent.com/108088961/201995921-098b853a-c8c5-4720-958e-91c2399ed865.png">

**Manager View of Customer Bookings**

Only a manager can delete bookings and only future bookings can be deleted. Bookings that can be deleted show up with a red text saying the user can double click to delete the booking or the user can tab to the booking and press enter. 

<img width="1424" alt="ManagerViewOfCustomerBookings" src="https://user-images.githubusercontent.com/108088961/201996327-fa50462d-c588-4eee-a44d-f36ebf176d13.png">

## Setup

1. Clone down this [repo](https://github.com/turingschool-examples/overlook-api)
2. cd into the directory and run `npm install`
3. Run `npm start`.
4. cd out of that directory and clone down this [repo](https://github.com:/daniabee/Hotel-Dani)
5. cd into the director and run `npm install`
6. Run `npm start`
7. Go to `http://localhos:8080/` to view the webpage

## Technologies used

- Mocha
- Chai
- Javascript
- HTML
- CSS/SASS
- Github
- Get & Post Netork Requests
- Webpack
