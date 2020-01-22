import DataController from './DataController.js';
const e = React.createElement;

class App extends React.Component {
    // dataController;

    constructor() {
        super();
        // this.dataController = new DataController();
        
        // this.dataController.getDataFromAPI();
    }

    render() {
        return e(
            'button',
            { onClick: () => alert('foobar') },
            'Like'
        )
    }
}

export default App;