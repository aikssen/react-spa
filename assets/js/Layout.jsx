import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

const ACTIVE = { color: 'red' };

export class Layout extends React.Component {

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
                <ul className="nav">
                    <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
                    <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
                    <li><Link to="/users" activeStyle={ACTIVE}>/users</Link></li>
                    <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>
                    <li><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
                    <li><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>
                    <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
                </ul>
                <span>{this.props.name}</span>
                {/*this.props.children*/}
                { React.cloneElement(this.props.children, {  hero: 'Batman' } ) }
            </div>
        );
    }
}