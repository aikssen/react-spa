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
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
                                <li><IndexLink to="/" activeStyle={ACTIVE}>IndexLink</IndexLink></li>
                                <li><Link to="/users" activeStyle={ACTIVE}>Users</Link></li>
                                <li><IndexLink to="/users" activeStyle={ACTIVE}>Users IndexLink</IndexLink></li>
                                <li><Link to="/users/ryan" activeStyle={ACTIVE}>Ryan</Link></li>
                                <li><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>
                                <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <h1>Hello from react</h1>
                    <span>{this.props.name}</span>
                    {/*this.props.children*/}
                    { React.cloneElement(this.props.children, {  hero: 'Batman' } ) }
                </div>
            </div>
        );
    }
}