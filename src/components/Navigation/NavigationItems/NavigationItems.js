import React from 'react';

import './NavigationItems.scss';

import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const menuItems = ['Home', 'Our Story', 'Church', 'Reception', 'Taxis', 'Accommodation', 'Gifts']

const navigationItems = (props) => {
    return (
        <ul className="navigationItems">
            {menuItems.map((item) => {
                let anchor = item.replace(/\s+/g, '-').toLowerCase();
                let offset = 0;

                if (anchor === 'church') {
                    offset = -100
                }

                return (
                    <li key={item}>
                        <Link to={anchor} 
                            spy={true} 
                            hashSpy={true} 
                            smooth={true} 
                            duration={500} 
                            offset={offset}
                            onSetActive={props.clicked}>{item}</Link>
                    </li>
                )}
            )}
            <li onClick={props.clicked}><NavLink exact to="/rsvp">RSVP</NavLink></li>
        </ul>
    )
}

export default navigationItems;