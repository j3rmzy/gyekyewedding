import React, { Component } from 'react';

class NavigationItems extends Component {
    render () {
        return (
            <ul>
                <li>Home</li>
                <li>Our Story</li>
                <li>Church</li>
                <li onClick={this.props.clicked}>Reception</li>
                <li onClick={this.props.clicked}>Accommodation</li>
                <li>Gifts</li>
            </ul>
        )
    }
}

export default NavigationItems;