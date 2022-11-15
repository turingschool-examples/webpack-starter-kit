const fetchApiUrl = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${path} API Error!`))
}


const fetchData = (user) => {
  return Promise.all([
    fetchApiUrl("bookings"),
    fetchApiUrl("rooms"),
    fetchApiUrl("customers"),
    fetchApiUrl(`customers/${user}`)
  ])
}

export function post(data) {
  fetch('http://localhost:3001/api/v1/bookings', { method: 'POST', body: data, headers: { 'Content-Type': 'application/json' } })
    .then(results => results.json)
    .then(console.log)
}

export default { fetchData }