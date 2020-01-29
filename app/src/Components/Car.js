import CarMeta from './CarMeta.js';
import utils from '../utils/utils.js'

const e = React.createElement;

export default class Car extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {}

    toggleFavouriteByDriverID(e) {
        e.preventDefault();
        this.props.toggleFavouriteByDriverID(this.props.car.driverID);
    }

    render() {
        const favouriteButtonText = (this.props.car.favourite ? 'Remove this car from your favourites' : 'Add this car to your favourites');
        return e('div', {className: 'col-12 col-md-6 col-lg-4 d-inline-block mb-4 d-flex'},
                    e('div', {className: 'car-item card flex-fill'},
                        e('div', {className: 'card-body'}, [
                                e('button', {key: 'favouriteButton', type: 'button', className: `car-favourite-button ${(this.props.car.favourite ? 'favourite':'')}`, title: favouriteButtonText, onClick: this.toggleFavouriteByDriverID.bind(this)}, [
                                    e('i', {key: 'favouriteIcon', className: `${(this.props.car.favourite ? 'fas':'far')} fa-heart`}, null),
                                    e('span', {key: 'favouriteCaption', className: 'screen-reader-only'}, favouriteButtonText)
                                ]),
                                e('div', {key: 'car-data', className: 'd-flex align-items-center'}, [
                                        e('img', {key: 'thumbnail', src: 'https://placeimg.com/100/100/people?z=' + this.props.car.driverID, className: 'rounded-circle', title: this.props.car.driverName, alt: 'Driver profile picture'}, null),
                                        e('div', {key: 'titleContainer', className: 'ml-3'}, [
                                            e('h4', {key: 'title', title: 'Driver name', className: 'mb-1 h4'}, this.props.car.driverName),
                                            // Why is this.props.car.driverGender returning null within the icon, but this.props.car.driverGender works?
                                            e(CarMeta, {key: 'driverGender', icon: `fas fa-${this.props.car.driverGender}`, fw: false, detail: utils.capitalizeFirstLetter(this.props.car.driverGender)}, null),
                                        ])
                                    ]
                                ),
                                e('div', {key: 'metaContainer', className: 'mt-3 border-top pt-3'}, [
                                    e(CarMeta, {key: 'carMake', icon: 'fas fa-car', fw: true, detail: this.props.car.carMake}, null),
                                    e(CarMeta, {key: 'driverInfo', icon: 'fas fa-info-circle', fw: true, detail: this.props.car.driverInfo}, null),
                                    e(CarMeta, {key: 'driverCityOrigins', icon: 'fas fa-home', fw: true, detail: this.props.car.driverCityOrigin}, null),
                                    e(CarMeta, {key: 'driverLocation', icon: 'fas fa-map-marker-alt', fw: true, detail: this.props.car.location}, null),
                                    e(CarMeta, {key: 'kmDriven', icon: 'fas fa-road', fw: true, detail: this.props.car.kmDriven + 'km'}, null),
                                    e('button', {key: 'contactButton', type: 'button', className: 'btn btn-outline-primary w-100 mt-3', onClick: () => {alert('Start a call!')}}, [
                                        e('i', {key: 'contactButtonIcon', className: 'fas fa-phone'}, null),
                                        e('span', {key: 'contactText', className: 'ml-2'}, `Call ${this.props.car.driverPhone}`)
                                    ])
                                ])
                            ]
                        )
                    )
                );
    }
}