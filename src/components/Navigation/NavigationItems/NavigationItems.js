import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './NavigationItems.scss';

import SignOut from '../../SignOut/SignOut';
import Aux from '../../../hoc/Aux';

import AuthUserContext from '../../AuthUserContext/AuthUserContext';

const menuItems = ['Home', 'Wedding Party', 'Church', 'Reception', 'Taxis', 'Accommodation', 'Gifts', 'RSVP']

const navigationItems = (props) => {
    return (
        <Aux>
            <ul className="navigationItems">
                {menuItems.map((item) => {
                    let anchor = item.replace(/\s+/g, '-').toLowerCase();
                    let hash = '/#' + anchor;
                    
                    if (anchor === 'rsvp') {
                        hash = '/rsvp/login';
                    }

                    return (
                        <li key={item} onClick={props.clicked}>
                            <NavLink to={hash}>{item}</NavLink>
                        </li>
                    )
                }
                )}
            </ul>
            <AuthUserContext.Consumer>
                {authUser => authUser
                ? <SignOut signout={props.signout} />
                : null}
            </AuthUserContext.Consumer>
        </Aux>
    )
}

navigationItems.propsTypes = {
    onClick: PropTypes.func,
    signout: PropTypes.func
}

export default navigationItems;