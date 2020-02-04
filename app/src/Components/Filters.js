import Toggle from './Toggle.js';

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
            e('div', {className: 'mb-3 border-bottom pb-3 justify-content-between'}, [
                e('div', {key: 'filtersContainer', className: 'row'}, [
                    e('div', {key: 'searchContainer', className: 'col-6 input-group'}, [
                        e('input', {key: 'searchTermInput', className: 'form-control', placeholder: 'Driver name, Car make, etc', 'aria-label': 'Search by car or driver details'}, null),
                        e('div', {key:'buttonGroup', className: 'input-group-append'}, [
                            e('button', {key: 'searchTermButton', className: 'form-control', type: 'button'}, [
                                e('i', {key: 'searchTermButtonIcon', className: 'fa fa-search'}, null)
                            ])
                        ])
                    ]),
                    e('div', {key: 'filterFavouritesContainer', className: 'col-6 d-flex align-items-center justify-content-end'}, [
                        // e('input', {key: 'filterFavouritesInput', id: 'favouritesFilter', type: 'checkbox', onChange: this.filterFavourites.bind(this)}, null),
                        // e('label', {key: 'filterFavouritesLabel', for: 'favouritesFilter', className: 'ml-2 mb-0'}, 'Only favourites')
                        e(Toggle, {key: 'filterFavouritesToggle', name: 'filterFavouritesToggle', label: 'Only favourites', onChange: this.filterFavourites.bind(this)}, null)
                    ])
                ])
            ])
        );
    }
}