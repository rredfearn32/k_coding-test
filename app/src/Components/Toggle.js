const e = React.createElement;

export default class Toggle extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return(
            e('div', {}, [
                e('label', {key: 'toggleElement', className: 'toggle', htmlFor: this.props.name}, [
                    e('input', {key: 'toggleElementInput', type: 'checkbox', id: this.props.name, onChange: this.props.onChange}, null),
                    e('span', {key: 'toggleElementSpan', className: 'switch round'}, null)
                ])
            ])
        )
    }
}