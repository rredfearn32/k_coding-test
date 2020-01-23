const e = React.createElement;

export default class Car extends React.Component {
    constructor() {
        super();

        this.setState = {
            driverName: this.props.driverName,
            driverCityOrigin: this.props.driverCityOrigin,
            driverPhone: this.props.driverPhone,
            driverGender: this.props.driverGender,
            driverInfo: this.props.driverInfo,
            carMake: this.props.carMake,
            kmDriven: this.props.kmDriven,
            location: this.props.location
        }
    }

    render() {
        return e('div', {},
            e('h2', {}, this.state.driverName)
        );
    }
}