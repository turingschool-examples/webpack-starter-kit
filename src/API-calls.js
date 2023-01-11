// fetch GET
const fetchAll = (dataType) => {
	return fetch(`http://localhost:3001/api/v1/${dataType}`)
			.then(response => response.json())
			.catch(error => console.log(error));
}

const fetchOne = (dataType, id) => {
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

