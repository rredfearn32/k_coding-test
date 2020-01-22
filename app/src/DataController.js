class DataController {
    constructor() {
        console.log('Created data controller');
    }

    getDataFromAPI() {
        fetch('http://localhost:3000')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    }
}

export default DataController;