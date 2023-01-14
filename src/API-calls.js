// fetch GET
const getAPIData = async (dataType) => {
	return fetch(`http://localhost:3001/api/v1/${dataType}`)
			.then(response => response.json())
			.catch(error => console.log(error));
}

const getOneAPIData = async (dataType, id) => {
	return fetch(`http://localhost:3001/api/v1/${dataType}/${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Missing or Incorrect Username/Password");
				} else {
					return response.json()
				}
			})
			.catch(() => {
				return false
			});
}

function updateAPIData(newData, dataType) {
  const results =   fetch(`http://localhost:3001/api/v1/${dataType}`, {
    method: 'POST',
    body: JSON.stringify(newData), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    return res.json()
  }).catch(error => console.log(error))
  return results
}

export { getAPIData, getOneAPIData, updateAPIData }