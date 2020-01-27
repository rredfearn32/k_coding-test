class DataController {
    constructor() {}

    getCars() {
        return fetch('http://localhost:3000')
        .then((response) => {
            return response.json();
        });
    }
}

export default DataController;