import React from 'react';

import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';

import './TopDrawer.scss';

const topDrawer = (props) => {
    let attachedClasses = ['top-drawer', 'close'];
    if (props.open) {
        attachedClasses = ['top-drawer', 'open'];
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <nav className={attachedClasses.join(' ')}>
                <NavigationItems />
            </nav>
        </Aux>
    )
}

export default topDrawer;