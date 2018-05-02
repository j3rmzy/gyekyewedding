import React, { Component } from 'react';

import './NavigationItems.scss';

class NavigationItems extends Component {
    render () {
        return (
            <ul className="navigationItems">
                <li><a onClick={this.props.clicked}>Home</a></li>
                <li><a onClick={this.props.clicked}>Our Story</a></li>
                <li><a>RSVP</a></li>
                <li><a onClick={this.props.clicked}>Church</a></li>
                <li><a onClick={this.props.clicked}>Reception</a></li>
                <li><a onClick={this.props.clicked}>Accommodation</a></li>
                <li><a onClick={this.props.clicked}>Gifts</a></li>
            </ul>
        )
    }
}

export default NavigationItems;