import DataController from './DataController.mjs';

class App {
    dataController;

    constructor() {
        this.dataController = new DataController();
        
        this.dataController.getDataFromAPI();
    }
}

export default App;