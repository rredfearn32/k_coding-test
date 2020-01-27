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
                        e('a', {className: 'navbar-brand mb-0 h1 d-flex align-items-center'}, [
                            e('span', {key: 'stackedIconContainer', className: 'fa-stack'}, [
                                e('i', {key: 'stackedIconSquare', className: 'far fa-square fa-stack-2x'}, null),
                                e('i', {key: 'stackedIconCar', className: 'fas fa-car fa-stack-1x'}, null)
                            ]),
                            e('span', {key: 'siteTitle', className: 'ml-1'}, 'Autoplahn')
                        ])
                    )
                )
            )
        );
    }
}

{/* <span class="fa-stack fa-2x">
  <i class="fas fa-square fa-stack-2x"></i>
  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
</span> */}