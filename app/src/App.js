import DataController from './DataController.js';

class App {
    dataController;

    constructor() {
        this.dataController = new DataController();
        
        this.dataController.getDataFromAPI();
    }
}

export default App;