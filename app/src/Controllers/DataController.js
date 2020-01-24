class DataController {
    constructor() {}

    getDataFromAPI() {
        return fetch('http://localhost:3000')
        .then((response) => {
            return response.json();
        });
    }
}

export default DataController;