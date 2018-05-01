import React from 'react';

import './Toolbar.scss';

import MenuToggle from '../MenuToggle/MenuToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
    return (
        <header className="toolbar">
            <MenuToggle />
            <nav className="toolbar-desktop-only">
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;