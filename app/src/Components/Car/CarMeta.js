const e = React.createElement;

export default class CarMeta extends React.Component {
    constructor() {
        super();

        this.state = {
            icon: '',
            detail: ''
        }
    }

    componentDidMount() {
        this.setState({
            icon: this.props.icon,
            detail: this.props.detail,
            fw: this.props.fw
        })
    }

    render() {
        return e('div', {className: 'd-flex align-items-baseline mb-1'}, [
            e('i', {key: 'carMetaIcon', className: `${this.state.icon} ${this.state.fw ? 'fa-fw' : ''} text-primary`}, null),
            e('span', {key: 'carMetaValue', className: 'ml-2'}, this.props.detail) // Why does props.text work but state.text give null???
        ]);
    }
}