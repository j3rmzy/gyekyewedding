import React from 'react';

import './NavigationItems.scss';

import { NavHashLink as NavLink } from 'react-router-hash-link';

const menuItems = ['Home', 'Our Story', 'Church', 'Reception', 'Taxis', 'Accommodation', 'Gifts', 'RSVP']

const navigationItems = (props) => {
    return (
        <ul className="navigationItems">
            {menuItems.map((item) => {
                let anchor = item.replace(/\s+/g, '-').toLowerCase();
                let hash = '/#' + anchor;
                
                if (anchor === 'rsvp') {
                    hash = '/rsvp/login';
                }

                return (
                    <li key={item} onClick={props.clicked}>
                        <NavLink smooth to={hash}>{item}</NavLink>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default navigationItems;