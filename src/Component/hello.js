import React, { Component } from 'react';

class Hello extends Component {
    render() {
        const { name } = this.props;
        return (
            <h1 style={{ backgroundColor: 'red' }}>You entered {name}</h1>
        )
    }

}

export default Hello;