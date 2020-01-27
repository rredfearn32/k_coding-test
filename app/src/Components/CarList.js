import Car from './Car.js'
import Filters from './Filters.js'

const e = React.createElement;

export default class CarList extends React.Component {
    constructor() {
        super();

        this.state = {
            carObjects: []
        }
    }

    componentDidMount() {
        this.props.dataController.getCars().then(data => {
            this.setState({
                carObjects: data
            });
        });
    }

    /**
     * Filter the cars based on a prop value
     * @param {String} prop 
     * @param {String} value 
     */
    filterCars(prop, value) {
        this.dataController.filterCars(prop, value);
    }

    render() {
        return e('div', {className: 'container mt-5'}, [
                e('div', {key: 'filtersContainer', className: 'row'},
                    e(Filters, {cars: this.state.carObjects}, null)
                ),
                e('div', {key: 'carlist', className: 'row'}, this.state.carObjects.map(car => {
                        return e(Car, {key: car.driverID, car: car, applyFilter: this.filterCars.bind(this)}, null)
                    })
                )
            ]
        )
    }
}