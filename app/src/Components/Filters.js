const e = React.createElement;

export default class Filters extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            e('div', {className: 'col-12 well'}, 
                e('span', {}, 'Filters go here')
            )
        );
    }
}