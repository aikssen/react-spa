import React from 'react';


export class Main extends React.Component {

    constructor(props) {  // -> componentWillMount
        super(props);
    }


    static defaultProps = {  // -> getDefaultProps
        name: 'Something'
    };


    static propTypes = { // -> propTypes
        name: React.PropTypes.string
    };

    state = {  // -> getInitialState
        name: this.props.name
    };


    render() {
        return(
            <div>
                <h1>Hello from react</h1>
                <span  >{this.props.name}</span>
            </div>
        );
    }
}