import Car from './Car/Car.js'
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
            },
            favouritedCars: false
        }
    }

    componentDidMount() {
        this.props.dataController.getCars().then(data => {
            this.setState({
                carObjects: data
            });
            this.checkForFavouritedCars();
        });
    }

    checkForFavouritedCars() {
        /**
         * Normally the whole "filter only favourite cars" feature would be done through the server-side
         * logic, with API calls to get either allCars or favouritedCars, depending if the filter is checked.
         * However, because this test focuses around the front-end, I'm just going to do it with flags like this.
         */
        this.setState({
            favouritedCars: this.state.carObjects.filter(car => car.favourite).length > 0
        });
    }

    toggleFavouriteByDriverID(targetDriverID) {
        const carObjectsCopy = this.state.carObjects;
        const targetCar = carObjectsCopy.find(car => car.driverID === targetDriverID)
        targetCar.favourite = !targetCar.favourite;
        this.setState({
            carObjects: carObjectsCopy
        });
        this.checkForFavouritedCars();
    }

    updateFilters(filters) {
        this.setState({
            filters: filters
        });
    }

    getCarListOrEmptyMessage() {
        let result;
        if (!this.state.favouritedCars && this.state.filters.onlyFavourites) {
            return e('div', {key: 'noFavouritedCars'}, 'No favourited cars')
        }
        
        return e('div', {key: 'carlist', className: 'row'}, this.state.carObjects.map(car => {
                
                if (this.state.filters.onlyFavourites && !car.favourite) {
                    return null;
                } else {
                    if (this.state.filters.searchTerm.length > 0) {
                        for(const prop in car) {
                            if (Object.prototype.hasOwnProperty.call(car, prop) && typeof car[prop] === 'string') {
                                if (car[prop].toLowerCase().includes(this.state.filters.searchTerm.toLowerCase())) {
                                    return e(Car, {key: car.driverID, car: car, toggleFavouriteByDriverID: this.toggleFavouriteByDriverID.bind(this)}, null);
                                }
                            }
                        }
                    } else {
                        return e(Car, {key: car.driverID, car: car, toggleFavouriteByDriverID: this.toggleFavouriteByDriverID.bind(this)}, null)
                    }
                }
            })
        )
    }

    render() {
        return e('div', {className: 'container mt-5'}, [
                e(Filters, {key: 'filter', filters: this.state.filters, updateFilters: this.updateFilters.bind(this)}, null),
                this.getCarListOrEmptyMessage()
            ]
        )
    }
}