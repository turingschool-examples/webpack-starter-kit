const fetchUserData = (dataType: string) => {
    const root = 'http://localhost:3001/api/v1/'
    const url = `${root}${dataType}`
    const promise = fetch(url)
    .then(response => response.json())
    return promise
}

export {
    fetchUserData
}