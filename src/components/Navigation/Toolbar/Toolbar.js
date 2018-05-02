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
                    clicked={props.toAnchor} />
            </nav>
        </header>
    )
}

export default toolbar;