const e = React.createElement;

export default class Search extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return(
            e('div', {className: 'search-group'}, [
                e('input', {key: 'searchTermInput', className: 'form-control', placeholder: this.props.placeholder, onChange: this.props.onchange}, null),
                e('i', {key: 'searchTermButtonIcon', className: 'fas fa-search'}, null)
            ])
        );
    }
}