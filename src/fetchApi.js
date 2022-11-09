const fetchApiUrl = (path) => {
    return fetch(`http://localhost:3001/api/v1/${path}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${path} API Error!`))
  }
  
  
  const fetchData = () => {
    return Promise.all([
      fetchApiUrl("bookings"),
      fetchApiUrl("rooms"),
      fetchApiUrl("customers"),
      fetchApiUrl("customers/12")
    ])
  }

  export default { fetchData }