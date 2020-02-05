import Toggle from './Filter/Toggle.js';
import Search from './Filter/Search.js';

const e = React.createElement;

export default class Filters extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    filterFavourites(e) {
        this.props.filters.onlyFavourites = e.currentTarget.checked;
        this.props.updateFilters(this.props.filters);
    }

    setSearchTerm(e) {
        this.props.filters.searchTerm = e.currentTarget.value;
        this.props.updateFilters(this.props.filters);
    }

    render() {
        return (
            e('div', {className: 'mb-3 border-bottom pb-3 justify-content-between'}, [
                e('div', {key: 'filtersContainer', className: 'row'}, [
                    e('div', {key: 'searchContainer', className: 'col-6'},
                        e(Search, {key: 'searchElement', placeholder: 'Driver name, Car make, etc', 'aria-label': 'Search by car or driver details', onchange: this.setSearchTerm.bind(this)}, null)
                    ),
                    e('div', {key: 'filterFavouritesContainer', className: 'col-6 d-flex align-items-center justify-content-end'},
                        e(Toggle, {key: 'filterFavouritesToggle', name: 'filterFavouritesToggle', label: 'Only favourites', onChange: this.filterFavourites.bind(this)}, null)
                    )
                ])
            ])
        );
    }
}