import React from 'react';

export class User extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.params.id}</h2>
            </div>
        )
    }
}