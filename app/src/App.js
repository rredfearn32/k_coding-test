import DataController from './Controllers/DataController.js';

import CarList from './Components/CarList.js';
import HeaderNav from './Components/HeaderNav.js';

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
        return e('div', {}, [
                    e(HeaderNav, {key: 'headernav'}, null),
                    e(CarList, {key: 'carList', getCars: this.getData.bind(this)}, null)
                ]);
    }
}