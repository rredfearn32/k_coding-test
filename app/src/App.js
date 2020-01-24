import DataController from './Controllers/DataController.js';

import CarList from './Models/CarList.js'

const e = React.createElement;

export default class App extends React.Component {
    dataController;
    
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getData() {
        this.dataController = new DataController();
        return this.dataController.getDataFromAPI();
    }

    render() {
        return e('div', {className: 'container'}, [
                    e(CarList, {key: 'carList', getCars: this.getData.bind(this)}, null)
                ]);
    }
}