const e = React.createElement;

export default class HeaderNav extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return e('nav', {className: 'navbar navbar-dark bg-dark'}, 
            e('div', {className: 'container'},
                e('div', {className: 'row'},
                    e('div', {className: 'col'}, 
                        e('a', {className: 'navbar-brand mb-0 h1'}, 'Autoplahn')
                    )
                )
            )
        );
    }
}