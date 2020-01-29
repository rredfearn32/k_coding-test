import SwitchPill from './SwitchPill.js';

const e = React.createElement;

export default class Filters extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    filterFavourites(e) {
        this.props.filters.onlyFavourites = e.target.checked;
        this.props.updateFilters(this.props.filters);
    }

    render() {
        return (
            e('div', {className: 'col-12 d-flex mb-3 border-bottom pb-3 justify-content-between'},
                e('div', {key: 'searchContainer', className: 'd-flex align-items-center'}, [
                    e('label', {key: 'searchLabel', className: 'mr-2 mb-0'}, 'Search:'),
                    e('input', {key: 'searchTermInput', className: 'form-control', placeholder: 'Driver name, Car make, etc'}, null),
                ]),
                e('div', {key: 'filterFavouritesContainer', className: 'd-flex align-items-center'}, [
                    e('input', {key: 'filterFavouritesInput', type: 'checkbox', onChange: this.filterFavourites.bind(this)}, null),
                    e('label', {key: 'filterFavouritesLabel', className: 'ml-2 mb-0'}, 'Show only favourites')
                ])
            )
        );
    }
}