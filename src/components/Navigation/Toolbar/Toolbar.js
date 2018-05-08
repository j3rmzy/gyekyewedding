import React from 'react';

import './Toolbar.scss';

import MenuToggle from '../MenuToggle/MenuToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className="toolbar">
            <MenuToggle open={props.open} />
            <nav className="toolbar-desktop-only">
                <NavigationItems 
                    clicked={props.setActiveClass}
                    signout={props.signout} />
            </nav>
        </header>
    )
}

export default toolbar;