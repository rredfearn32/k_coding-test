const e = React.createElement;

export default class Toggle extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return(
            e('div', {className: 'pointer'}, [
                e('label', {key: 'toggleElement', className: 'toggle pointer', htmlFor: this.props.name}, [
                    e('input', {key: 'toggleElementInput', type: 'checkbox', id: this.props.name, onChange: this.props.onChange}, null),
                    e('span', {key: 'toggleElementSpan', className: 'switch round'}, null)
                ]),
                e('label', {key: 'toggleLabel', className: 'ml-2 mb-0 pointer', htmlFor: this.props.name}, this.props.label)
            ])
        );
    }
}