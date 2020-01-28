import CarMeta from './CarMeta.js';
import utils from '../utils/utils.js'

const e = React.createElement;

export default class Car extends React.Component {
    constructor() {
        super();
        
        this.state = {
            driverName: '',
            driverCityOrigin: '',
            driverPhone: '',
            driverGender: '',
            driverInfo: '',
            carMake: '',
            kmDriven: '',
            location: '',
            favourite: false
        }
    }

    componentDidMount() {
        this.setState({
            driverID: this.props.car.driverID,
            driverName: this.props.car.driverName,
            driverCityOrigin: this.props.car.driverCityOrigin,
            driverPhone: this.props.car.driverPhone,
            driverGender: this.props.car.driverGender,
            driverInfo: this.props.car.driverInfo,
            carMake: this.props.car.carMake,
            kmDriven: this.props.car.kmDriven,
            location: this.props.car.location,
            favourite: this.props.car.favourite
        });
    }

    toggleFavourite(e) {
        e.preventDefault();
        this.setState({
            favourite: !this.state.favourite
        });
        this.props.updateCar(this);
    }

    render() {
        const favouriteButtonText = (this.state.favourite ? 'Remove this car from your favourites' : 'Add this car to your favourites');
        return e('div', {className: 'col-12 col-md-6 col-lg-4 d-inline-block mb-4 d-flex'},
                    e('div', {className: 'car-item card flex-fill'},
                        e('div', {className: 'card-body'}, [
                                e('button', {key: 'favouriteButton', type: 'button', className: `car-favourite-button ${(this.state.favourite ? 'favourite':'')}`, title: favouriteButtonText, onClick: this.toggleFavourite.bind(this)}, [
                                    e('i', {key: 'favouriteIcon', className: `${(this.state.favourite ? 'fas':'far')} fa-heart`}, null),
                                    e('span', {key: 'favouriteCaption', className: 'screen-reader-only'}, favouriteButtonText)
                                ]),
                                e('div', {key: 'car-data', className: 'd-flex align-items-center'}, [
                                        e('img', {key: 'thumbnail', src: 'https://placeimg.com/100/100/people?z=' + this.state.driverID, className: 'rounded-circle', title: this.state.driverName, alt: 'Driver profile picture'}, null),
                                        e('div', {key: 'titleContainer', className: 'ml-3'}, [
                                            e('h4', {key: 'title', title: 'Driver name', className: 'mb-1 h4'}, this.state.driverName),
                                            // Why is this.state.driverGender returning null within the icon, but this.props.car.driverGender works?
                                            e(CarMeta, {key: 'driverGender', icon: `fas fa-${this.props.car.driverGender}`, fw: false, detail: utils.capitalizeFirstLetter(this.state.driverGender)}, null),
                                        ])
                                    ]
                                ),
                                e('div', {key: 'metaContainer', className: 'mt-3 border-top pt-3'}, [
                                    e(CarMeta, {key: 'carMake', icon: 'fas fa-car', fw: true, detail: this.state.carMake}, null),
                                    e(CarMeta, {key: 'driverInfo', icon: 'fas fa-info-circle', fw: true, detail: this.state.driverInfo}, null),
                                    e(CarMeta, {key: 'driverCityOrigins', icon: 'fas fa-home', fw: true, detail: this.state.driverCityOrigin}, null),
                                    e(CarMeta, {key: 'driverLocation', icon: 'fas fa-map-marker-alt', fw: true, detail: this.state.location}, null),
                                    e(CarMeta, {key: 'kmDriven', icon: 'fas fa-road', fw: true, detail: this.state.kmDriven + 'km'}, null),
                                    e('button', {key: 'contactButton', type: 'button', className: 'btn btn-outline-primary w-100 mt-3', onClick: () => {alert('Start a call!')}}, [
                                        e('i', {key: 'contactButtonIcon', className: 'fas fa-phone'}, null),
                                        e('span', {key: 'contactText', className: 'ml-2'}, `Call ${this.state.driverPhone}`)
                                    ])
                                ])
                            ]
                        )
                    )
                );
    }
}