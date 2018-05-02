import React, { Component } from 'react';

import { Link } from 'react-scroll';

import './NavigationItems.scss';

class NavigationItems extends Component {
    render () {
        return (
            <ul className="navigationItems">
                <li><Link to="home" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Home</Link></li>
                <li><Link to="our-story" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Our Story</Link></li>
                <li><a>RSVP</a></li>
                <li><Link to="church" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Church</Link></li>
                <li><Link to="reception" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Reception</Link></li>
                <li><Link to="accommodation" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Accommodation</Link></li>
                <li><Link to="gifts" spy={true} duration={500} smooth={true} onSetActive={this.props.clicked}>Gifts</Link></li>
            </ul>
        )
    }
}

export default NavigationItems;