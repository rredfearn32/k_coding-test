import Car from './Car.js'
import Filters from './Filters.js'

const e = React.createElement;

export default class CarList extends React.Component {
    constructor() {
        super();

        this.state = {
            carObjects: [],
            filters: {
                onlyFavourites: false,
                searchTerm: ''
            }
        }
    }

    componentDidMount() {
        this.props.dataController.getCars().then(data => {
            this.setState({
                carObjects: data
            });
        });
    }

    updateCar(newCar) {
        const newCars = this.state.carObjects.map(car => {
            return car.driverID === newCar.state.driverID ? newCar.state : car; 
        });
        this.setState({
            carObjects: newCars
        });
    }

    updateFilters(filters) {
        this.setState({
            filters: filters
        });
    }

    render() {
        return e('div', {className: 'container mt-5'}, [
                e('div', {key: 'filtersContainer', className: 'row'},
                    e(Filters, {filters: this.state.filters, updateFilters: this.updateFilters.bind(this)}, null)
                ),
                e('div', {key: 'carlist', className: 'row'}, this.state.carObjects.map(car => {
                        
                        if (this.state.filters.onlyFavourites && !car.favourite) {
                            return null;
                        } else {
                            if (this.state.filters.searchTerm.length > 0) {
                                for(const prop in car) {
                                    if (Object.prototype.hasOwnProperty.call(car, prop) && typeof car[prop] === 'string') {
                                        if (car[prop].toLowerCase().includes(this.state.filters.searchTerm.toLowerCase())) {
                                            return e(Car, {key: car.driverID, car: car, updateCar: this.updateCar.bind(this)}, null);
                                        }
                                    }
                                }
                            } else {
                                return e(Car, {key: car.driverID, car: car, updateCar: this.updateCar.bind(this)}, null)
                            }
                        }
                    })
                )
            ]
        )
    }
}