import React from 'react';
import { IndexRoute, Link, IndexLink } from 'react-router'

export class Users extends React.Component {

    state = {  // -> getInitialState
        users: [
            {
                id: 1,
                name: 'John Doe'
            },
            {
                id: 2,
                name: 'Jill Valentine'
            }
        ]
    };


    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {/* use Link to route around the app */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}