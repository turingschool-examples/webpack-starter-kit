function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No data found or data format incorrect`);
            }
            console.log(response) 
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(`Error fetching data`, error));
}

export {fetchData}