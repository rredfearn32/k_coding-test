import DataController from './DataController.js';
const e = React.createElement;

class App extends React.Component {
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
        return e('div', { onClick: () => alert('foobar') },
            e('ul', {}, 
                this.state.data.map(item => {
                    return e('li', {}, item.driverName)
                })
            )
        )
    }
}

export default App;