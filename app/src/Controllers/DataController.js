class DataController {
    constructor() {
        console.log('Created data controller');
    }

    getDataFromAPI() {
        return fetch('http://localhost:3000')
        .then((response) => {
            return response.json();
        });
    }
}

export default DataController;