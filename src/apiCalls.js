export function getUsers(){
    const toExport = []
    const userData = fetch('http://localhost:3001/api/v1/customers').then(
        (response) =>{
            if(response.ok){
                let fulfilledRespone = response.json();
                fulfilledRespone.then(data => {
                    data.customers.forEach(element => {
                        hi.push(element);
                    });
                });
            };
        });
    return toExport;
};

