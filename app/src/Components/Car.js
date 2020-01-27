const e = React.createElement;

export default class Car extends React.Component {
    constructor() {
        super();
        
        this.state = {
            driverName: null,
            driverCityOrigin: null,
            driverPhone: null,
            driverGender: null,
            driverInfo: null,
            carMake: null,
            kmDriven: null,
            location: null
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
            location: this.props.car.location
        });
    }

    filterByCarMake(e) {
        e.preventDefault();
        this.props.dataController.filterCars('filterByCarMake', this.state.carMake)
    }

    render() {
        return e('div', {className: 'col-12 col-md-6 col-lg-4 d-inline-block mb-4 d-flex'},
                    e('div', {className: 'car-item card flex-fill'},
                        e('div', {className: 'card-body'}, [
                                e('a', {key: 'favourite', href: '#', className: 'far fa-heart car-favourite-button'}, null),
                                e('div', {className: 'd-flex align-items-center'}, [
                                        e('img', {key: 'thumbnail', src: 'https://placeimg.com/100/100/people?z=' + this.state.driverID, className: 'rounded-circle', title: this.state.driverName, alt: 'Driver profile picture'}, null),
                                        e('div', {key: 'titleContainer', className: 'ml-3'}, [
                                            e('h4', {key: 'title'}, this.state.driverName),
                                            e('a', {key: 'carMake', href: '#', onClick: this.filterByCarMake}, this.state.carMake)
                                        ]),
                                        e('div', {key: 'metaContainer'}, null)
                                    ]
                                )
                            ]
                        )
                    )
                );
    }
}