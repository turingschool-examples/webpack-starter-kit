import {fetchData} from './api.js'

let header = document.getElementById('h1')
let travelInfo = document.getElementById('travel-info')


//GET URLS
//All travelers 	http://localhost:3001/api/v1/travelers
//One traveler 	http://localhost:3001/api/v1/travelers/idnumber
//All trips 	http://localhost:3001/api/v1/trips
//Destinations  	http://localhost:3001/api/v1/destinations 

const displayElement= () => {
 fetchData('http://localhost:3001/api/v1/travelers/', 'travelers')
.then(data => console.log(data))
}
displayElement()

export {displayElement}