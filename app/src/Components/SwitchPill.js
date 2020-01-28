const e = React.createElement;

export default class SwitchPill extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            e('div', {className: 'col-12'}, 
                e('span', {}, 'Switch pill')
            )
        );
    }
}