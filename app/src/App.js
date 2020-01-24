import DataController from './Controllers/DataController.js';

import Car from './Models/Car.js'

const e = React.createElement;

export default class App extends React.Component {
    dataController;
    
    constructor() {
        super();
        this.state = {
            data: []
        }

        this.getData();
    }

    getData() {
        this.dataController = new DataController();
        this.dataController.getDataFromAPI()
        .then(data => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return e('div', {},
            e('ul', {}, 
                this.state.data.map(item => {
                    return e(Car, {}, item.driverName)
                })
            )
        );
    }
}