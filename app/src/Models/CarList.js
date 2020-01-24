import Car from './Car.js'

const e = React.createElement;

export default class CarList extends React.Component {
    constructor() {
        super();

        this.state = {
            carObjects: []
        }
    }

    componentDidMount() {
        this.props.getCars().then(data => {
            this.setState({
                carObjects: data
            });
        });
    }

    render() {
        return e('div', {className: 'row'}, this.state.carObjects.map(car => {
            return e(Car, {key: car.driverID, car: car}, null)
        }));
    }
}