import DataController from './Controllers/DataController.js';

import CarList from './Components/CarList.js';
import HeaderNav from './Components/HeaderNav.js';

const e = React.createElement;

export default class App extends React.Component {
    dataController = new DataController();
    
    constructor() {
        super();
    }

    render() {
        return e('div', {id: 'app'}, [
                    e(HeaderNav, {key: 'headernav'}, null),
                    e(CarList, {key: 'carList', dataController: this.dataController}, null)
                ]);
    }
}